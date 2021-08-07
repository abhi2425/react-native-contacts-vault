import AsyncStorage from '@react-native-async-storage/async-storage'

export const getDataFromAsyncStorage = async (key) => {
  try {
    const data = await AsyncStorage.getItem(key)
    if (data) return JSON.parse(data)

    return null
  } catch (error) {
    console.log(error)
    return null
  }
}
