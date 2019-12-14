import React, { Component, useState, useContext, Fragment } from 'react'
import { Platform, StyleSheet, Text, View, ImageBackground, SafeAreaView, StatusBar, ScrollView } from 'react-native'
import { Button } from 'react-native-elements'
import styled from 'styled-components'
import { AppContext } from '../contexts/AppContext'

export default function Index({ navigation, dispatch }) {
  const [count, setCount] = useState(0)
  const appContext = useContext(AppContext)

  onPress = (demo) => {
    appContext.updateDemo(demo)
  }

  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>
          <ContainerView>
            <Text>{count}</Text>
            <Text>{appContext.demo}</Text>
            <Button onPress={() => setCount(count + 1)} title="Plus Count" />
            <ConfigMessageText>{global.Config.MESSAGE}</ConfigMessageText>
            <Button onPress={() => this.onPress("Demo Context API")} title="change demo text" />
          </ContainerView>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  )
}

const ContainerView = styled.View`
  flex: 1
`

const ConfigMessageText = styled(props => <Text {...props} />)`
  color: red
`
