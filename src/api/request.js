import axios from '../helpers/axiosInstances'

const request = async (url, method, data = null) => {
  try {
    const response = await axios({ url, method, data })
    return { response, status: 'success' }
  } catch (error) {
    console.log(error)
    return {
      response: error.response ? error.response.data : 'Something went wrong ',
      status: 'failure',
    }
  }
}

export default request
