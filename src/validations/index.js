export const isEmpty = (obj) =>
  [Object, Array].includes((obj || {}).constructor) && !Object.entries(obj || {}).length

export const isEmptyString = (text) => {
  return text === '' || text == null
}

export const validateForm = async (obj = {}, keys = [], validationObj = {}) => {
  let validationResult = {}
  // eslint-disable-next-line array-callback-return
  keys.forEach((key) => {
    if (validationObj(obj)[key]() !== undefined)
      validationResult = {
        ...validationResult,
        [key]: validationObj(obj)[key](),
      }
  })
  return validationResult
}

export const doesArrayContains = (array = undefined, arrayToAsk = []) => {
  if (arrayToAsk.length === 0) return false
  return arrayToAsk.includes(array)
}
export const doesObjectContains = (key = null, objectToAsk = {}) =>
  Object.prototype.hasOwnProperty.call(objectToAsk, key)

/**
 * returns de number of word in a string
 * @param {string} text
 * @return {number} number of words
 */
export const numberOfWords = (text) => {
  let result = text.replace(/(^\s*)|(\s*$)/gi, '')
  result = result.replace(/[ ]{2,}/gi, ' ')
  result = result.replace(/\n /, '\n')
  return result.split(' ').length
}

export const isUrl = (url) => {
  const regex = /^[(http(s)?)://(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/
  return regex.test(String(url).toLowerCase())
}
