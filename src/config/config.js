import { DEV_BACK_END_URL, PROD_BACK_END_URL } from '@env'

// eslint-disable-next-line no-undef
export const URL = __DEV__ ? DEV_BACK_END_URL : PROD_BACK_END_URL
