import { useNavigation } from '@react-navigation/core'
import React, { memo } from 'react'
import { View, Text } from 'react-native'
import { colors } from '../../assets/themes/color'

const AuthToggle = ({ screen, text, button }) => {
  const { navigate } = useNavigation()

  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontSize: 20 }}>
        {text}
        <Text onPress={() => navigate(screen)} style={{ color: colors.danger }}>
          {button}
        </Text>
      </Text>
    </View>
  )
}

export default memo(AuthToggle)
