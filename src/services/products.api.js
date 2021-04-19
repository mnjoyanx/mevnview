import { request } from './axios'

export const getProduct = (id) => request({method: 'get', url: `products/${id}`})
export const getProducts = () => request({method: 'get', url: `products`})