/* eslint-disable react/display-name */
import { useNavigation } from '@react-navigation/core'
import React, { useEffect } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Container from '../../components/UI/Container/Container'

const contactsScreenOption = (toggleDrawer) => ({
  headerLeft: () => (
    <TouchableOpacity activeOpacity={0.7} onPress={() => toggleDrawer()}>
      <Text style={{ padding: 10 }}>Nav </Text>
    </TouchableOpacity>
  ),
})
const Contacts = () => {
  const { setOptions, toggleDrawer } = useNavigation()

  useEffect(() => setOptions(contactsScreenOption(toggleDrawer)), [])
  return <Container></Container>
}

export default Contacts
