import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  StyleSheet,
  Image,
} from 'react-native';
import { Button, Icon } from 'react-native-elements';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
  }

  onPress = (e) => {
    console.log(this.state.username);
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.iconBox}>
          <Icon
            name='chat-bubble-outline'
            size='60'
            color='rgba(0,0,0,0.6)'
          />
        </View>
        <View style={styles.loginBox}>
          <TextInput
            style={styles.input}
            value={this.state.username}
            onChangeText={(text) => this.setState({username: text})}
            placeholder={'Enter User Nickname'}
            maxLength={12}
            multiline={false}
            />
          <Button
            buttonStyle={styles.button}
            onPress={this.onPress}
            textStyle={styles.label}
            title={'LOGIN'}
            >
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconBox: {
    flex: 1,
    justifyContent: 'center',
  },
  loginBox: {
    flex: 1,
  },
  input: {
    width: 250,
    color: '#555555',
    padding: 10,
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    alignSelf: 'center',
    backgroundColor: '#ffffff',
  },
  button: {
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  label: {
    textAlign: 'center',
    width: 230,
    fontSize: 20,
    fontWeight: '600',
  },
});
