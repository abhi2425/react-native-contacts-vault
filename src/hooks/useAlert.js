import { useState } from 'react'

export const useAlert = () => {
  const [alert, setAlert] = useState({ show: false, message: '', type: '' })

  const closeAlert = () => setAlert({ ...alert, show: false })
  const popAlert = (message, type) => {
    setAlert({ show: true, message, type })
    setTimeout(() => setAlert({ ...alert, show: false }), 4500)
  }
  return { alert, popAlert, closeAlert }
}
