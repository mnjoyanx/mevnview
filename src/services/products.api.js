import { get } from 'core-js/core/dict'
import { request } from './axios'

const getProduct = () => request({method: 'get', url: `product/${id}`})