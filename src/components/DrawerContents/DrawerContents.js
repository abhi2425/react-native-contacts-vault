import React, { useMemo } from 'react'
import { View, Text, SafeAreaView, Image } from 'react-native'
import AuthHeader from '../AuthHeader/AuthHeader'
import Container from '../UI/Container/Container'
import NavLink from './NavLink'

const navLinks = () => [
  { icon: '', label: 'Settings', onPress: '' },
  { icon: '', label: 'Logout', onPress: '' },
]

const DrawerContents = ({ navigation }) => {
  const links = useMemo(
    () =>
      navLinks(navigation).map((data, index) => (
        <NavLink key={index} {...data} />
      )),
    []
  )
  return (
    <SafeAreaView>
      <Container>
        <AuthHeader />
        <View>{links}</View>
      </Container>
    </SafeAreaView>
  )
}

export default DrawerContents
