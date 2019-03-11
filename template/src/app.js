import React, { Component } from 'react'
import { Router } from './router'
import { Config } from './config/config'
import { createStore } from 'redux'
import reducer from './redux/reducer'
import { Provider } from 'react-redux'

let store = createStore(reducer)
console.log(store.getState())
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}
