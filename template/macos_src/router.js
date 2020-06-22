import React from 'react'
import { NativeRouter, Route, Link } from "react-router-native"

import Index from './screens/index'
import Web from './screens/web'

export default function Router() {
  return (
    <NativeRouter>
      <Route exact path="/" component={Index} />
      <Route path="/web" component={Web} />
    </NativeRouter>
  )
}
