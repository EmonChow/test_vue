import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://localhost:9000',
    data: {},
    withCredentials: false,
    headers: {
        'Accept': 'application.json',
       'Content-Type':'application.json'
    }

})
export default {
    getSignup(){
        return apiClient.get('/users')
    },
    postSignup(){
        return apiClient.post('/users')
    }
}

