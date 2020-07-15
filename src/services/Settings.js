import buildUrl from 'build-url'

export default {
  listReloadTime: 10000, // 10 secs
  xsReloadTime: 60000, // 1 min
  mdReloadTime: 3600000, // 1 hour
  lgReloadTime: 86400000, // 1 day
  urls: {
    apiUrl: process.env.REACT_APP_API_URL,
  },
  path: {
    last: `economy/last`,
    values: (key) => `economy/values/${key}`,
    date: ({ key, date }) => `economy/date/${key}/${date}`,
  },
  buildUrl: (
    url = null,
    path = null,
    queryParams = null,
    hash = null,
    lowerCase = false,
    disableCSV = false,
  ) =>
    buildUrl(url, {
      path,
      hash,
      lowerCase,
      disableCSV,
      queryParams,
    }),
}
