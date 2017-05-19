import { View } from 'react-native';
import React, { Component } from 'react';
import Login from './src/components/login';


export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Login />
      </View>
    );
  }
}
