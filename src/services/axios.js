import axios from 'axios'

axios.defaults.baseURL = 'http://localhose:5000/api/v1'

export const request = async ({ url, method, data }) => {
    const response = axios[method](url, data)
    return response
}