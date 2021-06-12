import React, { Component } from 'react'
import { SafeAreaView } from 'react-native'
import WebView from 'react-native-webview'
import Config from 'react-native-config'

const INJECTED_JAVASCRIPT = `
setTimeout(function() {
  var footer = document.getElementsByClassName('u-sm-up-hide')[0];

  if (footer) {
    footer.remove();
  }
}, 1000);

true;
`;

const onMessage = (event) => {
  console.log(event)
}

const renderWebPage = (uri) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        source={{ uri: Config.MAIN_URL + uri }}
        injectedJavaScript={INJECTED_JAVASCRIPT}
        onMessage={(event) => { onMessage(event) }}
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
