import React, { useCallback, useState } from 'react'
import { Divider } from '@material-ui/core'
import HistoricalGraph from '../components/HistoricalGraph'
import { onGetSummary, onGetHistorical, valueEPModel } from '../model'
import CardsResume from '../components/CardsResume'
import styleJss from '../styleJss'

const Dashboard = () => {
  const classes = styleJss()
  const [historicalState, setHistoricalState] = useState(valueEPModel)

  const handleQuerySummary = useCallback(async () => {
    const response = await onGetSummary()
    if (response.status === 200) return response.data
    return false
  }, [])
  const handleQueryHistoricalValues = async (key) => {
    const response = await onGetHistorical(key)
    if (response.status === 200) return response.data
    return false
  }

  const handleChangeKeySelected = async (key) => {
    const response = await handleQueryHistoricalValues(key)
    if (response) setHistoricalState(response)
  }
  return (
    <>
      <CardsResume querySummary={handleQuerySummary} action={handleChangeKeySelected} />
      <Divider className={classes.divider} />
      <HistoricalGraph state={historicalState} />
      <Divider className={classes.divider} />
    </>
  )
}
export default Dashboard
