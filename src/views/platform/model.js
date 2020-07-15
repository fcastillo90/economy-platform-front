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

export const lastEPModel = {
  cobre: { key: '', name: '', unit: '', date: null, value: null },
  dolar: { key: '', name: '', unit: '', date: null, value: null },
  euro: { key: '', name: '', unit: '', date: null, value: null },
  ipc: { key: '', name: '', unit: '', date: null, value: null },
  ivp: { key: '', name: '', unit: '', date: null, value: null },
  oro: { key: '', name: '', unit: '', date: null, value: null },
  plata: { key: '', name: '', unit: '', date: null, value: null },
  uf: { key: '', name: '', unit: '', date: null, value: null },
  utm: { key: '', name: '', unit: '', date: null, value: null },
  yen: { key: '', name: '', unit: '', date: null, value: null },
}
