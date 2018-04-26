import React, { Component } from 'react';
import Config from '../../config/config.js';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Tab1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Click to open Item page
        </Text>

        <Text>
          {Config.WELCOME_MSG}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});