import { getFromApi } from '@services'
import Settings from '@services/Settings'
import { onSuccess, onError, onPending } from '@services/Common'

export const onGetSummary = () =>
  getFromApi({
    url: Settings.buildUrl(Settings.urls.apiUrl, Settings.path.last),
    onSuccess,
    onError,
    onPending,
  })
export const onGetHistorical = (key) =>
  getFromApi({
    url: Settings.buildUrl(Settings.urls.apiUrl, Settings.path.values(key)),
    onSuccess,
    onError,
    onPending,
  })
export const onGetDate = ({ key, date }) =>
  getFromApi({
    url: Settings.buildUrl(Settings.urls.apiUrl, Settings.path.date({ key, date })),
    onSuccess,
    onError,
    onPending,
  })
export const dateEPModel = { key: '', name: '', unit: '', date: 0, value: 0 }
export const lastEPModel = {
  cobre: dateEPModel,
  dolar: dateEPModel,
  euro: dateEPModel,
  ipc: dateEPModel,
  ivp: dateEPModel,
  oro: dateEPModel,
  plata: dateEPModel,
  uf: dateEPModel,
  utm: dateEPModel,
  yen: dateEPModel,
}
export const valueEPModel = {
  key: '',
  name: '',
  unit: '',
  values: {},
  graphicData: [],
}
