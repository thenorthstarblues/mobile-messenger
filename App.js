import { View, AppRegistry, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import Login from './src/components/login';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default class MobileMessenger extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Login />
      </View>
    );
  }
}



AppRegistry.registerComponent('main', () => MobileMessenger);
