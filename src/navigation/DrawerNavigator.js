import React from 'react'
import { createDrawerNavigator, DrawerContent } from '@react-navigation/drawer'
import HomeNavigator from './HomeNavigator'
import { HOME_NAVIGATOR } from '../constants/routeNames'

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerType='slide'
      drawerContent={({ navigation }) => (
        <DrawerContent navigation={navigation} />
      )}
    >
      <Drawer.Screen name={HOME_NAVIGATOR} component={HomeNavigator} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator
