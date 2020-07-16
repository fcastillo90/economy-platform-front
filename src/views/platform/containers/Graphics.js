import React, { useState } from 'react'
import { Divider, Typography } from '@material-ui/core'
import { SearchInput } from '@src/components/inputs'
import { KEYS } from '@constants'
import HistoricalGraph from '../components/HistoricalGraph'
import { onGetHistorical } from '../model'
import styleJss from '../styleJss'

const Graphics = () => {
  const classes = styleJss()
  const [state, setState] = useState([])

  const handleQueryHistoricalValues = async (key) => {
    const response = await onGetHistorical(key)
    if (response.status === 200) return response.data
    return false
  }
  const handleChangeKeySelected = async (key) => {
    const response = await handleQueryHistoricalValues(key)
    if (response) setState([response])
  }
  const handleToggleKey = () => {
    setState([])
  }
  const handleSelectKey = (arrayOfKeys) => {
    if (arrayOfKeys.length !== 0) {
      const newArray = [arrayOfKeys.pop()]
      newArray.forEach((key) => {
        if (key instanceof Object) handleChangeKeySelected(key.key)
        else handleChangeKeySelected(key)
      })
    } else handleToggleKey()
  }
  return (
    <>
      <Typography variant="h3">Historial</Typography>
      <SearchInput options={KEYS} keysSelected={state} onSearch={handleSelectKey} />
      <Divider className={classes.divider} />
      <HistoricalGraph state={state[0] || {}} handleToggleKey={handleToggleKey} />
    </>
  )
}
export default Graphics

Graphics.propTypes = {}
