import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { LOGIN, REGISTER } from '../constants/routeNames'
import Register from '../screens/Register/Register'
import Login from '../screens/Login/Login'

const AuthStack = createStackNavigator()

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name={LOGIN} component={Login} />
      <AuthStack.Screen name={REGISTER} component={Register} />
    </AuthStack.Navigator>
  )
}

export default AuthNavigator
