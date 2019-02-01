import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, ImageBackground } from 'react-native'
import { Button } from 'react-native-elements'

import styles from './styles/index.styl'

export default class Index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={ styles.label }>{global.Config.MESSAGE}</Text>
      </View>
    )
  }
}
