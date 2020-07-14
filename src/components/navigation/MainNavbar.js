/* Dependencies */
import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { Navbar } from '@components/navbar'
import { MAIN_NAVIGATION } from '@constants'
import { ThemeContext } from '@utils/ThemeContext'
import { changePageTitle } from '@src/utils'

export default () => {
  const { toggleTheme } = useContext(ThemeContext)
  const history = useHistory()
  const setUrl = (page) => {
    changePageTitle(page.title)
    history.push(page.url)
  }
  return (
    <Navbar title="Economy!" toggleTheme={toggleTheme} menu={MAIN_NAVIGATION} menuAction={setUrl} />
  )
}
