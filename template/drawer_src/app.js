import React from 'react'
import Router from './router'
import { Provider as PaperProvider } from 'react-native-paper'

console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed', 'Expected style']

export default function App() {
  return (
    <PaperProvider>
      <Router />
    </PaperProvider>
  )
}
