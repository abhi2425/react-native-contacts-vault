import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { utility } from '../../styles/stylesUtilities'

const NavLink = ({ icon, label, onPress }) => {
  return (
    <TouchableOpacity
      style={[utility['flex-row'], utility['margin-B-S']]}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <Image src={icon} />
      <Text style={[{ marginLeft: 5, fontSize: 18, letterSpacing: 1.2 }]}>
        {label}
      </Text>
    </TouchableOpacity>
  )
}

export default NavLink
