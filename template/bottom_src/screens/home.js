import React, { Component } from 'react'
import { SafeAreaView } from 'react-native'
import WebView from 'react-native-webview'

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <WebView source={{ uri: 'https://www.books.com.tw/' }} />
      </SafeAreaView>
    )
  }
}

