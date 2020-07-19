/* eslint-disable import/prefer-default-export */
import axios from 'axios'

export const getFromApi = async ({
  url = null,
  onSuccess = null,
  onError = () => {},
  onPending = () => {},
  type = '',
}) => {
  if (url == null || url === '' || onSuccess == null || typeof onSuccess !== 'function') {
    throw new Error("url and onSuccess can't be null or empty")
  }
  onPending()
  let headers = {}
  switch (type) {
    default:
      headers = { 'Content-Type': 'application/json' }
      break
  }
  return axios
    .get(url, { headers })
    .then((response) => {
      const { status, data } = response
      if (status === 200) {
        return onSuccess(data)
      }
      return onError({ status, data })
    })
    .catch((error) => {
      return onError({
        status: error.response?.status || 400,
        data: error.response?.statusText || '',
      })
    })
}
