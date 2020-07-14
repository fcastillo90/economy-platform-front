import {
  Dashboard as DashboardIcon,
  ShowChart as ShowChartIcon,
  Search as SearchIcon,
} from '@material-ui/icons'
import { URL_DASHBOARD, URL_GRAPHICS, URL_SEARCH } from './routes'

export const DRAWER_WIDTH = 240
export const MAIN_NAVIGATION = [
  {
    title: URL_DASHBOARD.title,
    action: URL_DASHBOARD,
    icon: DashboardIcon,
  },
  {
    title: URL_GRAPHICS.title,
    action: URL_GRAPHICS,
    icon: ShowChartIcon,
  },
  {
    title: URL_SEARCH.title,
    action: URL_SEARCH,
    icon: SearchIcon,
  },
]
