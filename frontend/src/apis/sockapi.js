import axios from 'axios'
import store from '../store'


const basicRequest = axios.create(
    { baseURL: 'http://127.0.0.1:8899' }
)
basicRequest.defaults.withCredentials = true
const apiSearchStock = async(stocknum) => {
  try {
    const response = await basicRequest.post('/search-stock', {'stocknum': stocknum})
    localStorage.setItem('predicted_price', response.data.predicted_price)
    localStorage.setItem('prediction_confidence', response.data.prediction_confidence)
  } catch (error) {
    console.error(error)
  }    
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
user_stockRequest.interceptors.response.use(
  // Category 1: Success (2xx) - just pass the response through
  (response) => response,

  // Category 2: Error (Outside 2xx)
  async (error) => {
    const { response, config: originalRequest } = error;

    if (response) {
      switch (response.status) {
        case 400: {
          const message = response.data?.message || 'Data error';
          alert(`Error 400: ${message}`);
          break;
        }

        case 401: {
          /* Check if we are already trying to refresh the token. 
            We check the URL to avoid an infinite loop if the /refresh call fails with a 401.
          */
          const isRefreshCall = originalRequest.url.includes('/refresh');

          if (!isRefreshCall) {
            try {
              // 1. Attempt to get a new access token
              // The refresh token is typically sent automatically via HttpOnly cookies
              const { data } = await basicRequest.post('/refresh');

              // 2. Save the new token in Vuex
              const newToken = data.accesstoken;
              store.dispatch("accesstoken_act", newToken);

              // 3. Update the failed request's header and retry it
              originalRequest.headers.Authorization = `Bearer ${newToken}`;
              return user_stockRequest(originalRequest);
              
            } catch (refreshError) {
              // 4. If refreshing the token fails (e.g., Refresh Token expired)
              // Clear the store and kick the user to the login page
              console.error('Refresh token expired or invalid');
              store.dispatch("reset_act");
              // router.push('/login'); // Optional: redirect to login
              return Promise.reject(refreshError);
            }
          }
          break;
        }
        
        default:
          console.error(`Unhandled Server Error: ${response.status}`);
      }
    } else {
      // Handle Network Errors (Server down, timeout, etc.)
      console.error('Network Error or No Response from Server');
    }

    return Promise.reject(error);
  }
);



const apiAddFavorite = async (stocknum) => {
  try {
    const response = await user_stockRequest.post('/add-favorite',{'username': store.getters.get_username, 'stocknum': [stocknum]})
    return response.data
  } catch (error) {
    console.error(error)
  }
}

const apiDeleteFavorite = async (stocknum) => {
  try {
    const response = await user_stockRequest.post('/delete-favorite',{'username': store.getters.get_username, 'stocknum': [stocknum]})
    return response.data
  } catch (error) {
    console.error(error)
  }
}



export {apiSearchStock, apiAddFavorite, apiDeleteFavorite}