import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, ImageBackground } from 'react-native'
import { Button } from 'react-native-elements'
import { connect } from 'react-redux'
import { setDemo } from '../redux/actions'

import styles from './styles/index.styl'

class Index extends Component {
  onPress = (demo) => {
    this.props.dispatch(setDemo({demo}))
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={ styles.label }>{global.Config.MESSAGE}</Text>
        <Button onPress={() => this.onPress(global.Config.MESSAGE)} title="Redux Test" />
        <Button onPress={() => this.props.navigation.navigate('Redux')} title="Redux Page" />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  state
})

export default connect(mapStateToProps)(Index)