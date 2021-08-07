import 'react-native-gesture-handler'
import React from 'react'
import AppNavContainer from './navigation/AppNavContainer'
import { GlobalStoreProvider } from './contexts/GlobalStore'
import { LogBox } from 'react-native'
LogBox.ignoreLogs(['Reanimated 2'])

const App = () => {
  return (
    <GlobalStoreProvider>
      <AppNavContainer />
    </GlobalStoreProvider>
  )
}

export default App
