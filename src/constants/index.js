import {
  Dashboard as DashboardIcon,
  ShowChart as ShowChartIcon,
  Search as SearchIcon,
  InfoOutlined as InfoOutlinedIcon,
} from '@material-ui/icons'
import { URL_DASHBOARD, URL_GRAPHICS, URL_SEARCH, URL_ABOUT } from './routes'

export const KEYS = ['cobre', 'dolar', 'euro', 'ipc', 'ivp', 'oro', 'plata', 'uf', 'utm', 'yen']
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
  {
    title: URL_ABOUT.title,
    url: URL_ABOUT.url,
    action: URL_ABOUT,
    icon: InfoOutlinedIcon,
  },
]
export const CURRENCYISOCODE = {
  pesos: 'CLP',
  dolar: 'USD',
}
