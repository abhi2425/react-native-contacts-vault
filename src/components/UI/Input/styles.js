import { StyleSheet } from 'react-native'
import { colors } from '../../../assets/themes/color'

export const styles = StyleSheet.create({
  label: {
    fontSize: 18,
  },
  formControl: {
    height: 42,
    alignItems: 'center',
    marginTop: 5,
  },
  inputContainer: {
    paddingVertical: 12,
  },
  textInput: {
    flex: 1,
    width: '100%',
    fontSize: 17,
    borderWidth: 1,
    borderRadius: 4,
    padding: 5,
    letterSpacing: 1.1,
    paddingRight: 50,
    borderColor: colors.grey,
  },
  icon: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 100,
  },
  error: {
    color: colors.danger,
    paddingTop: 4,
    fontSize: 12,
  },
})
