/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography } from '@material-ui/core'
import { LineChart } from '@components/charts'

const HistoricalGraph = ({ state, handleToggleKey }) => {
  return (
    <>
      <Typography variant="h4">Historial</Typography>
      <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
        <Grid item xs={12}>
          <LineChart data={state.graphicData} keys={state.key} handleToggleKey={handleToggleKey} />
        </Grid>
      </Grid>
    </>
  )
}
export default HistoricalGraph

HistoricalGraph.propTypes = {
  state: PropTypes.shape({
    key: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    unit: PropTypes.string.isRequired,
    values: PropTypes.object.isRequired,
    graphicData: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
  handleToggleKey: PropTypes.func.isRequired,
}
