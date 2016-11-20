/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  DatePickerIOS
} from 'react-native';

export default class TestDatePickerIOS extends Component {
  constructor(props) {
      super(props);
      this.state = {
        date: new Date(),
        //timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60,
      };
      this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {
      this.setState(date: date);
  }

  render() {
    return (
      <View style={styles.container}>
        <DatePickerIOS
          style={{ height: 150 }}
          date={this.state.date}
          onDateChange={this.onDateChange}
          mode="date"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#C8B8AA',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('TestDatePickerIOS', () => TestDatePickerIOS);
