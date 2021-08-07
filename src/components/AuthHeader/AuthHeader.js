import React, { memo } from 'react'
import { View, Text, Image } from 'react-native'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  logo: {
    width: 150,
    alignSelf: 'center',
    marginTop: 25,
  },
  header: {
    paddingBottom: 30,
  },
  headerText: {
    fontSize: 30,
    fontWeight: '500',
    letterSpacing: 1.5,
    marginBottom: 15,
    alignSelf: 'center',
  },
  title: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: '600',
  },
})
const AuthHeader = ({ title }) => {
  return (
    <View styles>
      <Image
        width={150}
        style={styles.logo}
        height={150}
        source={require('../../assets/images/logo.png')}
      />
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome To Contexts</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  )
}

export default memo(AuthHeader)
