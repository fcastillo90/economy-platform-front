import buildUrl from 'build-url'

export default {
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
