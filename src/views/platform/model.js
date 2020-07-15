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

export const lastEPModel = {
  cobre: { key: '', name: '', unit: '', date: 0, value: 0 },
  dolar: { key: '', name: '', unit: '', date: 0, value: 0 },
  euro: { key: '', name: '', unit: '', date: 0, value: 0 },
  ipc: { key: '', name: '', unit: '', date: 0, value: 0 },
  ivp: { key: '', name: '', unit: '', date: 0, value: 0 },
  oro: { key: '', name: '', unit: '', date: 0, value: 0 },
  plata: { key: '', name: '', unit: '', date: 0, value: 0 },
  uf: { key: '', name: '', unit: '', date: 0, value: 0 },
  utm: { key: '', name: '', unit: '', date: 0, value: 0 },
  yen: { key: '', name: '', unit: '', date: 0, value: 0 },
}
export const valueEPModel = {
  key: '',
  name: '',
  unit: '',
  values: {},
}
