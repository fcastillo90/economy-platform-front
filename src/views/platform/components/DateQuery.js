import React from 'react'
import PropTypes from 'prop-types'
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import { InfoCard } from '@components/cards'
import MomentUtils from '@date-io/moment'
import { Grid } from '@material-ui/core'
import moment from 'moment'
import { SearchInput } from '@components/inputs'
import { KEYS } from '@constants'

const DateQuery = ({ date, handleChangeDate, value, handleQuery, onDeleteSelected }) => {
  const handleSelectKey = (arrayOfKeys) => {
    arrayOfKeys.forEach((key) => {
      if (key instanceof Object) handleQuery(key.key)
      else handleQuery(key)
    })
  }
  return (
    <>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <Grid container direction="row" justify="space-between" alignItems="flex-start" spacing={2}>
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
          <Grid container item xs alignItems="flex-start" spacing={2}>
            <Grid item xs={12}>
              <SearchInput
                options={KEYS}
                keysSelected={value}
                onSearch={handleSelectKey}
                onDeleteSelected={onDeleteSelected}
              />
            </Grid>
            {value.map((query) => (
              <Grid item key={query.key}>
                <InfoCard infoObject={query} />
              </Grid>
            ))}
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
  handleQuery: PropTypes.func.isRequired,
  value: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      unit: PropTypes.string.isRequired,
      date: PropTypes.number.isRequired,
      value: PropTypes.number,
    }),
  ).isRequired,
}
