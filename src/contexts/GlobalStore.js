import React, { createContext, useContext, useMemo, useReducer } from 'react'
import { useAlert } from '../hooks/useAlert'
import { initialAuthState } from './initialStates/initialAuthState'
import { initialContactState } from './initialStates/initialContactState'
import { authReducer } from './reducers/authReducer'
import { contactReducer } from './reducers/contactReducer'

const GlobalContext = createContext({})

export const GlobalStoreProvider = ({ children }) => {
  const [authState, dispatchAuth] = useReducer(authReducer, initialAuthState)
  const { alert, closeAlert, popAlert } = useAlert()
  const [contactState, dispatchContact] = useReducer(
    contactReducer,
    initialContactState
  )

  const value = useMemo(
    () => ({
      authState,
      alert,
      contactState,
      closeAlert,
      popAlert,
      dispatchContact,
      dispatchAuth,
    }),
    [authState, contactState, alert]
  )

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  )
}

export const useGlobalContext = () => useContext(GlobalContext)
