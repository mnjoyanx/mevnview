import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:5000/api/v1'

export const request = async ({ url, method, data = {} }) => {
   return axios[method](url, data)
}