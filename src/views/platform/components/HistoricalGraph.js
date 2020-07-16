import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'
import { LineChart } from '@components/charts'

const HistoricalGraph = ({ state, handleToggleKey }) => {
  return (
    <>
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
    key: PropTypes.string,
    name: PropTypes.string,
    unit: PropTypes.string,
    values: PropTypes.object,
    graphicData: PropTypes.arrayOf(PropTypes.object),
  }),
  handleToggleKey: PropTypes.func.isRequired,
}

HistoricalGraph.defaultProps = {
  state: {},
}
