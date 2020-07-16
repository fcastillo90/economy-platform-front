import React from 'react'
import Views from '@views'
import { ThemeProvider } from '@utils/ThemeContext'

const App = () => (
  <ThemeProvider>
    <Views />
  </ThemeProvider>
)

export default App
