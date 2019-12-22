import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components'

export default class Scan extends Component {
    constructor(props) {
        super(props)
        this.state = {
            barcode: null
        }
    }

    render() {
        return (
          <Container>
              <Ean>{this.state.barcode ? this.state.barcode : '請對準書底的 Ean 進行掃描'}</Ean>
          </Container>
        )
    }
}

const Ean = styled(Text)`
  color: #fff
  font-size: 18
  align-self: center
  margin: 20px
`

const Container = styled(View)`
    flex: 1
    flex-direction: column
    background-color: black
`
