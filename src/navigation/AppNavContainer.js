import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { useGlobalContext } from '../contexts/GlobalStore'
import DrawerNavigator from './DrawerNavigator'
import AuthNavigator from './AuthNavigator'
import { getDataFromAsyncStorage } from '../helpers/getDataFromAsyncStorage'
import { ActivityIndicator, View } from 'react-native'
import { colors } from '../assets/themes/color'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

const AppNavContainer = () => {
  const {
    authState: { isLoggedIn },
  } = useGlobalContext()
  const [token, setToken] = useState('')
  const [loading, setLoading] = useState(true)
  useEffect(async () => {
    setLoading(true)
    setToken(await getDataFromAsyncStorage('token'))
    setLoading(false)
  }, [])

  return (
    <>
      {loading ? (
        <View style={styles.container}>
          <ActivityIndicator size='large' color={colors.primary} />
        </View>
      ) : (
        <NavigationContainer>
          {isLoggedIn || token ? <DrawerNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      )}
    </>
  )
}

export default AppNavContainer
