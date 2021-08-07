import axios from 'axios'
import { URL } from '../config/config'
import AsyncStorage from '@react-native-async-storage/async-storage'

let headers = {}
const axiosInstance = axios.create({
  baseURL: URL,
  headers,
})

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token')
    if (token) config.headers.Authorization = `Bearer ${token}`
    return config
  },
  (error) => Promise.reject(error)
)

export default axiosInstance
