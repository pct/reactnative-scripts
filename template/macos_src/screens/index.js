import React, { Component, useState, useContext, Fragment } from 'react'
import { Platform, StyleSheet, View, Text, Button, ImageBackground, StatusBar, ScrollView } from 'react-native'
import styled from 'styled-components'
import { AppContext } from '../contexts/AppContext'

export default function Index({ navigation, dispatch }) {
  const [count, setCount] = useState(0)
  const appContext = useContext(AppContext)

  onPress = (demo) => {
    appContext.updateDemo(demo)
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ScrollView>
        <ContainerView>
          <View>
            <ConfigMessageText h3>{global.Config.MESSAGE}</ConfigMessageText>
          </View>

          <View>
            <Text h1 style={{ textAlign: 'center'}}>{count}</Text>
            <Text h4>{appContext.demo}</Text>
            <ButtonView>
              <LeftButton onPress={() => setCount(count + 1)} title="Plus Count" />
              <RightButton onPress={() => this.onPress(`Text had changed to ${count}`)} title="change demo text" />
            </ButtonView>
          </View>
        </ContainerView>
      </ScrollView>
    </>
  )
}

const ContainerView = styled.View`
  flex: 1
`

const ConfigMessageText = styled(props => <Text {...props} />)`
  color: #208ddd
`

const ButtonView = styled.View`
  margin-top: 10;
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
`

const LeftButton = styled(Button)`
  align-self: flex-start
`

const RightButton = styled(Button)`
  align-self: flex-end
`

