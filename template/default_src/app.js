import React, { Component } from 'react'
import { LogBox } from 'react-native'
import Router from './router'
import { Config } from './config/config'
import { AppProvider } from './contexts/AppContext'
import { checkPermissions } from 'src/lib/utils'

LogBox.ignoreLogs(['Warning: Each', 'Warning: Failed', 'Expected style'])
//LogBox.ignoreAllLogs()

const App = () => {

  checkPermissions()

  return (
    <AppProvider>
      <Router />
    </AppProvider>
  )
}

export default App
