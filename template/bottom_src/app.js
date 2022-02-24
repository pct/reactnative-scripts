import React, { Component } from 'react'
import { LogBox } from 'react-native'
import Router from './router'
import { Provider as PaperProvider } from 'react-native-paper'

LogBox.ignoreLogs(['Warning: Each', 'Warning: Failed', 'Expected style'])
//LogBox.ignoreAllLogs()

export default class App extends Component {
  render() {
    return (
      <PaperProvider>
        <Router />
      </PaperProvider>
    )
  }
}
