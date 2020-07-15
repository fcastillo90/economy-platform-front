import {
  Dashboard as DashboardIcon,
  ShowChart as ShowChartIcon,
  Search as SearchIcon,
} from '@material-ui/icons'
import { URL_DASHBOARD, URL_GRAPHICS, URL_SEARCH } from './routes'

export const WEEKDAYS = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
export const MONTHS = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
]
export const DRAWER_WIDTH = 240
export const PAGE_TITLE = 'Economy!'
export const MAIN_NAVIGATION = [
  {
    title: URL_DASHBOARD.title,
    url: URL_DASHBOARD.url,
    action: URL_DASHBOARD,
    icon: DashboardIcon,
  },
  {
    title: URL_GRAPHICS.title,
    url: URL_GRAPHICS.url,
    action: URL_GRAPHICS,
    icon: ShowChartIcon,
  },
  {
    title: URL_SEARCH.title,
    url: URL_SEARCH.url,
    action: URL_SEARCH,
    icon: SearchIcon,
  },
]
export const CURRENCYISOCODE = {
  pesos: 'CLP',
  dolar: 'USD',
}
