import { PAGE_TITLE, CURRENCYISOCODE } from '@constants'
import moment from 'moment'

export const changePageTitle = (newTitle = '') => {
  document.title = `${PAGE_TITLE} - ${newTitle}`
}
export const currencyFormatter = (
  amount,
  decimalCount = 0,
  symbol = '$',
  decimal = ',',
  thousands = '.',
) => {
  const newDecimalCount = Number.isNaN(Math.abs(decimalCount)) ? 2 : Math.abs(decimalCount)
  const newAmount = Math.abs(Number(amount) || 0)
  const negativeSign = newAmount < 0 ? '-' : ''

  const i = parseInt(newAmount.toFixed(newDecimalCount), 10).toString()
  const j = i.length > 3 ? i.length % 3 : 0

  return `${symbol} ${negativeSign}${j ? i.substr(0, j) + thousands : ''}${i
    .substr(j)
    .replace(/(\d{3})(?=\d)/g, `$1${thousands}`)}${
    newDecimalCount
      ? decimal +
        Math.abs(newAmount - i)
          .toFixed(newDecimalCount)
          .slice(2)
      : ''
  }`
}
export const formatNumberToPct = (n) => {
  if (Number.isNaN(n) || n == null) return '0.00%'
  return `${parseFloat(n).toFixed(2)}%`
}
export const unitFormatter = ({ unit, value }) => {
  switch (unit) {
    case 'dolar':
      return currencyFormatter(value, 2, CURRENCYISOCODE.dolar)
    case 'pesos':
      return currencyFormatter(value, 2, CURRENCYISOCODE.pesos)
    case 'porcentual':
      return formatNumberToPct(value)
    default:
      return value
  }
}
export const dateFormatter = (rawDate) => {
  return moment.unix(rawDate).add(1, 'days').format('ddd, DD MMMM')
}
export const randomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`
export const capitalizeFirstLetter = (string) => {
  if (typeof string === 'string') return string.charAt(0).toUpperCase() + string.slice(1)
  return ''
}
