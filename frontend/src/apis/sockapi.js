import axios from 'axios'
import store from '../store'


const basicRequest = axios.create(
    { baseURL: 'http://127.0.0.1:8899' }
)
basicRequest.defaults.withCredentials = true
const apiSearchStock = async(stocknum) => {
    await basicRequest.post('/search-stock', {'stocknum': stocknum})
    .then((response) => {
        localStorage.setItem('predicted_price', response.data.predicted_price)
        localStorage.setItem('prediction_confidence', response.data.prediction_confidence)
    })
    
}

const user_stockRequest = axios.create(
    { baseURL: 'http://127.0.0.1:8899/user/' }
)

user_stockRequest.defaults.withCredentials = true
user_stockRequest.interceptors.request.use (async function (config) {
        if (typeof window !== 'undefined') {
            if(store.getters.get_accesstoken != ''){
                console.log(store.getters.get_accesstoken)
                config.headers.Authorization = 'Bearer ' + store.getters.get_accesstoken
            }
        }
        
        return config
        }, function (error) {
        return Promise.reject(error)
})

// Refreshtoken reference: https://www.dotblogs.com.tw/wasichris/2020/10/25/223728
user_stockRequest.interceptors.response.use(function (response) {
    return response
  }, function (error) {
    if (error.response) {
  
      // server responded status code falls out of the range of 2xx
      switch (error.response.status) {
        case 400:
          {
            const { message } = error.response.data
            alert(`${error.response.status}: ${message || '資料錯誤'}。`)
          }
  
          break
  
        case 401:
  
          {
            // 當不是 refresh token 作業發生 401 才需要更新 access token 並重發
            // 如果是就略過此刷新 access token 作業，直接不處理(因為 catch 已經攔截處理更新失敗的情況了)
            const refreshTokenUrl = 'http://localhost:8899/refresh'
            if (error.config.url !== refreshTokenUrl) {
              // 原始 request 資訊
              const originalRequest = error.config
  
              // 依據 refresh_token 刷新 access_token 並重發 request
              return basicRequest
                .post('/refresh') // refresh_toke is attached in cookie
                .then((response) => {
                  // [更新 access_token 成功]
  
                  // 刷新 storage (其他呼叫 api 的地方都會從此處取得新 access_token)
                  store.dispatch("accesstoken_act", response.data.accesstoken)
  
                  // 刷新原始 request 的 access_token
                  originalRequest.headers.Authorization = 'Bearer ' + response.data.accesstoken
  
                  // 重送 request (with new access_token)
                  return user_stockRequest(originalRequest)
                })
                
            }
          }
}}})


const apiAddFavorite = async (stocknum) => {
    await user_stockRequest.post('/add-favorite',{'username': store.getters.get_username, 'stocknum': [stocknum]})
    store.dispatch("addfavorite_act", stocknum)
    
}

const apiDeleteFavorite = async (stocknum) => {
    await user_stockRequest.post('/delete-favorite',{'username': store.getters.get_username, 'stocknum': [stocknum]})
    store.dispatch("deletefavorite_act", stocknum)
}



export {apiSearchStock, apiAddFavorite, apiDeleteFavorite}