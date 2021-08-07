import { StyleSheet } from 'react-native'
export const utility = StyleSheet.create({
  btn: {
    padding: 5,
    fontSize: 18,
    borderRadius: 100,
  },
  error: {
    marginTop: 5,
    fontFamily: 'monospace',
    fontSize: 15,
    letterSpacing: 0.5,
    color: 'red',
  },
  defaultFontSize: {
    fontSize: 16,
  },
  ['flex-row']: {
    display: 'flex',
    flexDirection: 'row',
  },
  ['flex-row-rev']: {
    display: 'flex',
    flexDirection: 'row-reverse',
  },

  ['flex-row-center']: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ['flex-row-btw']: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ['flex-row-even']: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  ['flex-row-around']: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  ['margin-T-XS']: {
    marginTop: 7,
  },

  ['margin-T-S']: {
    marginTop: 15,
  },
  ['margin-T-M']: {
    marginTop: 30,
  },
  ['margin-T-L']: {
    marginTop: 60,
  },
  ['margin-B-XS']: {
    marginBottom: 7,
  },
  ['margin-B-S']: {
    marginBottom: 15,
  },
  ['margin-B-M']: {
    marginBottom: 35,
  },
  ['margin-B-L']: {
    marginBottom: 70,
  },
})
