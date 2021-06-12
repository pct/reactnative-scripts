import React, { Component } from 'react'
import { SafeAreaView } from 'react-native'
import WebView from 'react-native-webview'
import Config from 'react-native-config'

const INJECTED_JAVASCRIPT = `
setTimeout(function() { 
  $('footer.u-sm-up-hide').remove()
}, 5000);

void(0);
`;

const renderWebPage = (uri) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        source={{ uri: Config.MAIN_URL + uri }}
        injectedJavaScript={INJECTED_JAVASCRIPT}
      />
    </SafeAreaView>
  )
}

export function Home() {
  return renderWebPage('/')
}

export function Follow() {
  return renderWebPage('/follow')
}

export function Tags() {
  return renderWebPage('/tags')
}

export function Search() {
  return renderWebPage('/search')
}

export function Login() {
  return renderWebPage('/login')
}
