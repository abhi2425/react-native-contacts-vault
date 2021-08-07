import AsyncStorage from '@react-native-async-storage/async-storage'
import { default as post } from '../../api/request'
import {
  AUTH_FAIL,
  AUTH_LOADING,
  AUTH_LOGIN_SUCCESS,
  AUTH_REGISTER_SUCCESS,
} from '../../constants/Auth/actionConstants'

export const register = async (data, authDispatcher) => {
  authDispatcher({ type: AUTH_LOADING })
  const { response, status } = await post('/auth/register', 'POST', data)

  if (status === 'success') {
    authDispatcher({ type: AUTH_REGISTER_SUCCESS, payload: response.data })
    return status
  }
  if (status === 'failure') {
    authDispatcher({ type: AUTH_FAIL })
    return response
  }
}

export const login = async (loginData, authDispatcher) => {
  authDispatcher({ type: AUTH_LOADING })
  const { response, status } = await post('/auth/login', 'POST', loginData)

  if (status === 'success') {
    authDispatcher({ type: AUTH_LOGIN_SUCCESS, payload: response.data })
    await AsyncStorage.setItem('token', JSON.stringify(response.data.token))
    await AsyncStorage.setItem('user', JSON.stringify(response.data.user))
    return true
  }
  if (status === 'failure') {
    authDispatcher({ type: AUTH_FAIL })
    return false
  }
}
