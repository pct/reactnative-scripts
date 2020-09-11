import React, { Component, useState, useContext, Fragment } from 'react'
import { Platform, StyleSheet, View, ImageBackground, SafeAreaView, StatusBar, ScrollView } from 'react-native'
import { Button, Card, Text } from 'react-native-elements'
import styled from 'styled-components'
import { AppContext } from '../contexts/AppContext'

import { useObservable } from 'rxjs-hooks'
import { interval } from "rxjs"
import DeviceInfo from 'react-native-device-info'


export default function Index({ navigation, dispatch }) {
  const version = DeviceInfo.getVersion()
  console.log('app version: ' + version)

  const [count, setCount] = useState(0)
  const appContext = useContext(AppContext)

  const timer_value = useObservable(() => interval(1000), 0);

  onPress = (demo) => {
    appContext.updateDemo(demo)
  }

  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>
          <ContainerView>
            <Card>
              <ConfigMessageText h3>{global.Config.MESSAGE}</ConfigMessageText>
            </Card>

            <Card>
              <Text h1 style={{ textAlign: 'center'}}>{count}</Text>
              <Text h4>{appContext.demo}</Text>
              <ButtonView>
                <LeftButton onPress={() => setCount(count + 1)} title="Plus Count" />
                <RightButton onPress={() => this.onPress(`Text had changed to ${count}`)} title="change demo text" />
              </ButtonView>
            </Card>
            <Card>
              <Text>RxJS Timer: {timer_value}</Text>
            </Card>
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
  color: #208ddd
`

const ButtonView = styled.View`
  margin-top: 10
  flex-direction: row
  flex: 1
  justify-content: space-between
`

const LeftButton = styled(Button)`
  align-self: flex-start
`

const RightButton = styled(Button)`
  align-self: flex-end
`

