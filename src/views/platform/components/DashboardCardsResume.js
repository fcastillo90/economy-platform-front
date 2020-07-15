import React, { useState, useEffect } from 'react'
import { InfoCard } from '@components/cards'
import { Grid } from '@material-ui/core'
import { lastEPModel } from '../model'

const DashboardCardsResume = ({ querySummary }) => {
  const [summaryState, setSummaryState] = useState(lastEPModel)

  useEffect(() => {
    const initSummary = async () => {
      const response = await querySummary()
      if (response) setSummaryState(response)
    }
    initSummary()
  }, [querySummary])

  useEffect(() => {
    console.log(summaryState)
  }, [summaryState])
  return (
    <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
      {Object.keys(summaryState).map((key) => (
        <Grid item xs key={key}>
          <InfoCard infoObject={summaryState[key]} />
        </Grid>
      ))}
    </Grid>
  )
}
export default DashboardCardsResume
