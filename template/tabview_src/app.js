import React, { Component } from 'react'
import { LogBox } from 'react-native'
import Router from './router'
import { AppProvider } from './contexts/AppContext'

LogBox.ignoreLogs(['Warning: Each', 'Warning: Failed', 'Expected style'])
//LogBox.ignoreAllLogs()

export default class App extends Component {
  render() {
    return (
      <AppProvider>
        <Router />
      </AppProvider>
    )
  }
}
