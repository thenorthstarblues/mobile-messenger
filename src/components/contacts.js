import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';

const contactList = [
  {
    id: 1,
    name: 'David',
    image: require('../assets/img/david.jpg'),
    status: 'sample status',
  },
  {
    id: 2,
    name: 'Jerry',
    image: require('../assets/img/jerry.jpg'),
    status: 'sample status',
  },
  {
    id: 3,
    name: 'Dream Dog',
    image: require('../assets/img/puppy.jpg'),
    status: 'sample status',
  },
];


class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  onContactPress = () => {
    console.log('button working');
  }

    render () {
      return (
        <View style={styles.container}>
          <View style={styles.listContainer}>
            <ScrollView>
              <TouchableHighlight onPress={() => this.onContactPress()}>
                <View style={styles.listItem}>
                  <View style={styles.listIcon}>
                    <Image
                      style={styles.channelIcon}
                      source={contactList[1].image}
                    />
                  </View>
                  <View style={styles.listInfo}>
                    <Text style={styles.titleLabel}>{contactList[1].name}</Text>
                    <Text style={styles.memberLabel}>{contactList[1].status}</Text>
                  </View>
                </View>
              </TouchableHighlight>
            </ScrollView>
          </View>
        </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#ffffff'
  },
  listContainer: {
    flex: 11,
    justifyContent: 'center',
    alignItems: 'stretch',
    marginTop: 10
  },
  listItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f8fc',
    borderBottomWidth: 0.5,
    borderColor: '#D0DBE4',
    padding: 5
  },
  listIcon: {
    justifyContent: 'flex-start',
    paddingLeft: 10,
    paddingRight: 15
  },
  channelIcon: {
    width: 30,
    height: 30
  },
  listInfo: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  titleLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: '#60768b',
  },
  memberLabel: {
    fontSize: 13,
    fontWeight: '400',
    color: '#abb8c4',
  }
});

export default Contacts;
