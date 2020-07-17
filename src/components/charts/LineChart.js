/* eslint-disable no-unused-vars */
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
import { Chip, Card, CardContent, Typography, useTheme } from '@material-ui/core'
import { randomColor, unitFormatter, capitalizeFirstLetter } from '@utils'

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload) {
    return (
      <Card>
        <CardContent>
          {payload.map((key) => {
            const unit = key.payload[`${key.name}-unit`]
            const value = key.payload[key.name]
            return (
              <React.Fragment key={key.name}>
                <Typography color="textSecondary" noWrap gutterBottom>
                  {key.name}
                </Typography>
                <Typography variant="h5" component="h2">
                  {unitFormatter({ unit, value })}
                </Typography>
                <Typography color="textSecondary">{label}</Typography>
              </React.Fragment>
            )
          })}
        </CardContent>
      </Card>
    )
  }

  return null
}
const LineChart = ({ data, keys, handleToggleKey, handleChartClick }) => {
  const theme = useTheme()
  const renderLegend = ({ payload }) => {
    return (
      <>
        {payload.map((entry) => (
          <Chip
            key={`item-${entry.value}`}
            label={capitalizeFirstLetter(entry.value)}
            color="secondary"
            onDelete={() => handleToggleKey(entry.value)}
          />
        ))}
      </>
    )
  }
  return (
    <>
      <ResponsiveContainer width="100%" height={384}>
        <LineChartRecharts
          data={data || []}
          margin={{
            top: 5,
            bottom: 5,
          }}
          onClick={(e) => handleChartClick(e.activeLabel)}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          {keys !== '' && <Legend content={renderLegend} />}
          <Line
            key={keys}
            dot={false}
            type="monotone"
            dataKey={keys}
            stroke={theme.palette.secondary.main}
            strokeWidth={3}
          />
        </LineChartRecharts>
      </ResponsiveContainer>
    </>
  )
}
export default LineChart

LineChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  keys: PropTypes.string,
  handleToggleKey: PropTypes.func.isRequired,
  handleChartClick: PropTypes.func,
}

LineChart.defaultProps = {
  data: [],
  keys: '',
  handleChartClick: () => {},
}
