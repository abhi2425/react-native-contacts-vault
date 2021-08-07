import React from 'react'
import { View, Text } from 'react-native'
import { colors } from '../../../assets/themes/color'
import { StyleSheet } from 'react-native'
import Close from 'react-native-vector-icons/AntDesign'

const Alert = ({ type, message, close }) => {
  return (
    <View
      style={[
        styles.alertBox,
        {
          backgroundColor: type === 'success' ? colors.accent : colors.danger,
        },
      ]}
    >
      <Text style={styles.message}>{message}</Text>
      <Text style={styles.close}>
        <Close name='close' onPress={close} size={30} color={colors.white} />
      </Text>
    </View>
  )
}

export const styles = StyleSheet.create({
  alertBox: {
    padding: 8,
    borderRadius: 5,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  message: {
    fontSize: 20,
    color: colors.white,
  },
  close: {
    alignSelf: 'center',
  },
})

export default Alert
