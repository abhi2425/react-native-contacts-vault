import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import {
  CONTACT_DETAILS,
  CONTACTS_LIST,
  SETTINGS,
  CREATE_CONTACT,
} from '../constants/routeNames'
import Contacts from '../screens/Contacts/Contacts'
import ContactDetails from '../screens/ContactDetails/ContactDetails'
import CreateContact from '../screens/CreateContact/CreateContact'
import Settings from '../screens/Settings/Settings'
const HomeStack = createStackNavigator()

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator initialRouteName={CONTACTS_LIST}>
      <HomeStack.Screen name={CONTACTS_LIST} component={Contacts} />
      <HomeStack.Screen name={CONTACT_DETAILS} component={ContactDetails} />
      <HomeStack.Screen name={CREATE_CONTACT} component={CreateContact} />
      <HomeStack.Screen name={SETTINGS} component={Settings} />
    </HomeStack.Navigator>
  )
}

export default HomeNavigator
