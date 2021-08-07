import {
  AUTH_FAIL,
  AUTH_LOADING,
  AUTH_LOGIN_SUCCESS,
  AUTH_REGISTER_SUCCESS,
} from '../../constants/Auth/actionConstants'
import { initialAuthState } from '../initialStates/initialAuthState'

export const authReducer = (state = initialAuthState, { type, payload }) => {
  switch (type) {
    case AUTH_LOADING:
      return {
        ...state,
        loading: true,
      }
    case AUTH_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        userData: payload,
      }
    case AUTH_LOGIN_SUCCESS:
      return {
        loading: false,
        isLoggedIn: true,
        userData: payload,
      }
    case AUTH_FAIL:
      return { ...state, isLoggedIn: false, loading: false }
    default:
      return state
  }
}
