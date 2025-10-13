
import axios from 'axios'
import store from '../store'
import router from '@/router'

const userRequest = axios.create(
    { baseURL: 'http://127.0.0.1:8899'}
)
userRequest.defaults.withCredentials = true
const apiUserAuth = async (username, password) => {
    await  userRequest.post( '/user-login', {'username': username, 'password': password})
    .then((response) => {
        let payload = {'uname': username, 'ulog': true, 'profile_picture': response.data.profile_picture, 'accesstoken': response.data.accesstoken, 'favorite_list': response.data.favorite_list, }
        store.dispatch("login_act", payload)
        
        
    }).then(()=> {
        router.push({path: '/'})
        location.reload()
    }).catch(err => {console.log(err.data)})
}

const apiUserCreate = async (form_create) => {
    await  userRequest.post( '/user-create', {
        'username': form_create.username,
        'password': form_create.password,
        'email': form_create.email,
        'profile_picture': form_create.profile_picture,
    })
    .then((response) => {
        console.log(response.data.user_create_result)
        if(response.data.user_create_result == 'true') {
            alert("Successfully Create New User")
            router.push({path: '/login'})
        }
        
        
    }).catch(err => {console.log(err.data)})
}

const apiUserProtected = async() => {
    await  userRequest.post( '/user_router/user-protected', {})
  .then(response => {
    // Set the access token in the component state
        alert(response.data.message)
    })
  };

  const apiUserLogout = () => {
    store.dispatch("reset_act")
    router.push("/")
    location.reload()
  }

export {apiUserAuth, apiUserCreate, apiUserProtected, apiUserLogout}