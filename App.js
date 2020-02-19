import React, { Component } from 'react'
import { View } from 'react-native'
import RegisterScreen from './app/screens/RegisterScreen'
import styles from './app/styles/styles'





export default class App extends Component {



  
  render() {
    return (
      <View style={styles.container}>
        <RegisterScreen />
      </View>
    )
  }
}

