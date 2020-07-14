/* Dependencies */
import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { Navbar } from '@components/navbar'
import { MAIN_NAVIGATION } from '@constants/'
import { ThemeContext } from '@utils/ThemeContext'

export default () => {
  const { toggleTheme } = useContext(ThemeContext)
  const history = useHistory()
  const setUrl = (event) => history.push(event)
  return (
    <Navbar title="Economy!" toggleTheme={toggleTheme} menu={MAIN_NAVIGATION} menuAction={setUrl} />
  )
}
