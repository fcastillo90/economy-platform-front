import React, { useCallback, useState, useEffect } from 'react'
import { Divider, Typography } from '@material-ui/core'
import moment from 'moment'
import HistoricalGraph from '../components/HistoricalGraph'
import DateQuery from '../components/DateQuery'
import {
  onGetSummary,
  onGetHistorical,
  dateEPModel,
  lastEPModel,
  valueEPModel,
  onGetDate,
} from '../model'
import CardsResume from '../components/CardsResume'
import styleJss from '../styleJss'

const Dashboard = () => {
  const classes = styleJss()
  const [state, setState] = useState(valueEPModel)
  const [summaryState, setSummaryState] = useState(lastEPModel)
  const [dateState, setDateState] = useState(moment())
  const [keyDateState, setKeyDateState] = useState(dateEPModel)

  const handleQuerySummary = useCallback(async () => {
    const response = await onGetSummary()
    if (response.status === 200) setSummaryState(response.data)
  }, [])
  const handleQueryHistoricalValues = async (key) => {
    const response = await onGetHistorical(key)
    if (response.status === 200) return response.data
    return false
  }
  const handleChangeDateSelected = async (date, key) => {
    if (date && (state.key !== '' || key)) {
      const response = await onGetDate({ key: state.key || key, date })
      if (response) setKeyDateState(response.data)
    }
  }
  const handleChangeKeySelected = async (key) => {
    const response = await handleQueryHistoricalValues(key)
    if (response) setState(response)
    handleChangeDateSelected(moment(dateState).format('DD-MM-YYYY'), key)
  }

  const handleChangeDate = (newDate) => {
    setDateState(newDate)
    handleChangeDateSelected(moment(newDate).format('DD-MM-YYYY'))
  }
  useEffect(() => {
    handleQuerySummary()
  }, [handleQuerySummary])
  const handleToggleKey = () => setState(valueEPModel)
  return (
    <>
      <Typography variant="h3">Resumen</Typography>
      <CardsResume data={summaryState} action={handleChangeKeySelected} />
      <Divider className={classes.divider} />
      <HistoricalGraph state={state} handleToggleKey={handleToggleKey} />
      <Divider className={classes.divider} />
      <DateQuery value={keyDateState} date={dateState} handleChangeDate={handleChangeDate} />
    </>
  )
}
export default Dashboard
