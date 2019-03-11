import React, { Component } from 'react'
import { Text } from 'react-native'
import { Button } from 'react-native-elements'
import { connect } from 'react-redux'

class Redux extends Component {
  render() {
    return (
      <Text>{this.props.demo}</Text>
    )
  }
}

const mapStateToProps = state => ({
  demo: state.Demo.demo,
  state
})

export default connect(mapStateToProps)(Redux)