import React from 'react'
import PropTypes from 'prop-types'
import {
  LineChart as LineChartRecharts,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import { Chip } from '@material-ui/core'
import { randomColor } from '@utils'

const renderLegend = ({ payload }) => {
  return (
    <>
      {payload.map((entry) => (
        <Chip key={`item-${entry.value}`} label={entry.value} color="primary" />
      ))}
    </>
  )
}

const LineChart = ({ data, handleClick }) => {
  return (
    <>
      <ResponsiveContainer width="100%" height={384}>
        <LineChartRecharts
          data={data.data}
          onClick={(event) => handleClick({ event, trigger: 'chart' })}
          margin={{
            top: 5,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend content={renderLegend} />
          {data.keys.map((key) => (
            <Line
              key={key}
              dot={false}
              type="monotone"
              customLabel={key}
              dataKey={key}
              stroke={randomColor()}
              strokeWidth={3}
            />
          ))}
        </LineChartRecharts>
      </ResponsiveContainer>
    </>
  )
}
export default LineChart

LineChart.propTypes = {
  data: PropTypes.shape({
    keys: PropTypes.arrayOf(PropTypes.string).isRequired,
    raw: PropTypes.object.isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
}
