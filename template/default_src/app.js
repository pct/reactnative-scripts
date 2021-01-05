import React, { Component } from 'react'
import Router from './router'
import { Config } from './config/config'
import { AppProvider } from './contexts/AppContext'

console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed', 'Expected style']

export default class App extends Component {
  render() {
    return (
      <AppProvider>
        <Router />
      </AppProvider>
    )
  }
}
