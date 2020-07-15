/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'
import { LineChart } from '@components/charts'
import moment from 'moment'

const HistoricalGraph = ({ state }) => {
  const [data, setData] = useState({
    raw: {},
    data: [],
    keys: [],
  })
  const handleChartClick = (e) => {
    console.log(e)
  }
  useEffect(() => {
    const handleHistoricalFormatter = () => {
      const newState = {}
      Object.entries(state.values).forEach((entrie) => {
        newState[entrie[0]] = {
          ...data.raw[entrie[0]],
          date: moment.unix(entrie[0]).format('DD-MM-YYYY'),
          [state.key]: entrie[1],
        }
      })
      return newState
    }
    const handleValueFormatter = async () => {
      const raw = await handleHistoricalFormatter()
      const formattedData = Object.entries(raw).map((entrie) => ({
        ...raw[entrie[0]],
      }))
      const keys = state.key !== '' ? [...data.keys, state.key] : data.keys
      setData({
        raw,
        data: formattedData,
        keys,
      })
    }
    handleValueFormatter()
  }, [state])
  return (
    <>
      <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
        <Grid item xs={12}>
          <LineChart data={data} handleClick={handleChartClick} />
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
  }).isRequired,
}
