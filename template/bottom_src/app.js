import React, { Component } from 'react'
import Router from './router'
import { Provider as PaperProvider } from 'react-native-paper'

export default class App extends Component {
  render() {
    return (
      <PaperProvider>
        <Router />
      </PaperProvider>
    )
  }
}
