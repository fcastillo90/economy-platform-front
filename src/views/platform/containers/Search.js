import React, { useState } from 'react'
import { Typography } from '@material-ui/core'
import moment from 'moment'
import DateQuery from '../components/DateQuery'
import { onGetDate } from '../model'

const Search = () => {
  const [dateState, setDateState] = useState(moment())
  const [keyDateState, setKeyDateState] = useState([])

  const handleChangeDateSelected = async (date, key) => {
    if (date && key) {
      const response = await onGetDate({ key, date })
      if (response) setKeyDateState((oldState) => [response.data, ...oldState])
    } else {
      keyDateState.forEach((keyToUpdate) => {
        handleChangeDateSelected(date, keyToUpdate.key)
      })
    }
  }
  const handleQuery = async (key) => {
    if (!keyDateState.find((keyObject) => keyObject.key === key)) {
      handleChangeDateSelected(moment(dateState).format('DD-MM-YYYY'), key)
    }
  }
  const handleChangeDate = (newDate) => {
    setDateState(newDate)
    setKeyDateState([])
    handleChangeDateSelected(moment(newDate).format('DD-MM-YYYY'))
  }
  return (
    <>
      <Typography variant="h3">Buscar</Typography>
      <DateQuery
        value={keyDateState}
        date={dateState}
        handleChangeDate={handleChangeDate}
        handleQuery={handleQuery}
      />
    </>
  )
}
export default Search
