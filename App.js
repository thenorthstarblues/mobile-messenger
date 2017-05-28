import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import Login from './src/components/login';
import Contacts from './src/components/contacts';

export default class MobileMessenger extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="login" component={Login} title="Login" />
          <Scene key="contact" component={Contacts} title="Contacts" />
        </Scene>
      </Router>
    );
  }
}



AppRegistry.registerComponent('main', () => MobileMessenger);
