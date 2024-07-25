import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components'

export default function Scan({ navigation }) {
  return (
    <Container>
      <Ean>請對準書底的 Ean 進行掃描</Ean>
    </Container>
  )
}

const Ean = styled(Text)`
  color: #fff;
  font-size: 18;
  align-self: center;
  margin: 20px;
`

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: black;
`
