import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, ImageBackground } from 'react-native'
import { Button } from 'react-native-elements'
import { connect } from 'react-redux'
import { setDemo } from '../redux/actions'
import styled from 'styled-components'

class Index extends Component {
  onPress = (demo) => {
    this.props.dispatch(setDemo({demo}))
  }

  render() {
    return (
      <ContainerView>
        <ConfigMessageText>{global.Config.MESSAGE}</ConfigMessageText>
        <Button onPress={() => this.onPress(global.Config.MESSAGE)} title="Redux Test" />
        <Button onPress={() => this.props.navigation.navigate('Redux')} title="Redux Page" />
      </ContainerView>
    )
  }
}

const mapStateToProps = state => ({
  state
})

const ContainerView = styled.View`
  flex: 1
`

const ConfigMessageText = styled(props => <Text {...props} />)`
  color: red
`

export default connect(mapStateToProps)(Index)