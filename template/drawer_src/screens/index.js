import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-elements'
import styled from 'styled-components'

export default function Index({ navigation }) {
  const [active, setActive] = useState("")

  return (
    <Container>
      <HeroText>從邊緣往右滑出選單</HeroText>
      <DrawerButton
        title="Toggle Drawer"
        onPress={() => navigation.toggleDrawer()}
      />
    </Container>
  )
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const HeroText = styled.Text`
  font-size: 30px;
  padding-vertical: 20px;
`

const DrawerButton = styled(Button)`
`
