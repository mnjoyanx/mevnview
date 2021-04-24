import { request } from '@/services/axios'

export const getCategory = (id) => request({ method: 'get', url: '/categories', data: id })
export const getCategories = () => request({method: 'get', url: 'categories'})