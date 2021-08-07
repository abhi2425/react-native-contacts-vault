import React from 'react'
import { StyleSheet } from 'react-native'
import { TouchableOpacity, ActivityIndicator } from 'react-native'
import { colors } from '../../../assets/themes/color'

const styles = StyleSheet.create({
  loading: {
    backgroundColor: colors.primary,
  },
})

const Loading = ({ color, bgColor }) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={[styles.loading, bgColor && { backgroundColor: bgColor }]}
    >
      <ActivityIndicator size='large' color={color ? color : 'white'} />
    </TouchableOpacity>
  )
}

export default Loading
