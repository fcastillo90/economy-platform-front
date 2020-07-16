import React from 'react'
import PropTypes from 'prop-types'
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import { InfoCard } from '@components/cards'
import MomentUtils from '@date-io/moment'
import { Grid } from '@material-ui/core'
import moment from 'moment'

const DateQuery = ({ date, handleChangeDate, value }) => {
  return (
    <>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <Grid container direction="row" justify="space-between" alignItems="center" spacing={2}>
          <Grid item>
            <DatePicker
              autoOk
              disableFuture
              orientation="landscape"
              variant="static"
              openTo="date"
              value={date}
              onChange={handleChangeDate}
            />
          </Grid>
          <Grid item>
            <InfoCard infoObject={value} />
          </Grid>
        </Grid>
      </MuiPickersUtilsProvider>
    </>
  )
}
export default DateQuery

DateQuery.propTypes = {
  date: PropTypes.instanceOf(moment).isRequired,
  handleChangeDate: PropTypes.func.isRequired,
  value: PropTypes.shape({
    key: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    unit: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
    value: PropTypes.number,
  }).isRequired,
}
