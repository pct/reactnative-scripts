import React, { Component } from 'react'
import { SafeAreaView } from 'react-native'
import WebView from 'react-native-webview'
import InAppBrowser from 'react-native-inappbrowser-reborn'

export default class Web extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { route } = this.props
    const url = route.url

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <WebView 
          mediaPlaybackRequiresUserAction={true}
          source={{ uri: url }}
          ref={ (ref) => { this.webview = ref } }
          onNavigationStateChange={ (event) => {
            if (event.url !== url) {
              this.webview.stopLoading()
              InAppBrowser.open(event.url, {
                preferredBarTintColor: '#453AA4',
                preferredControlTintColor: 'white',
                readerMode: false,
                animated: true,
                enableBarCollapsing: false,
              })
            }
          }}
        />
      </SafeAreaView>
    )
  }
}

