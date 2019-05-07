/**
 * UrbanPro React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import Main from "./screens/Main";

export default class App extends Component {

  componentDidMount(){
    StatusBar.setHidden(true);
  }
  render() {
    return (
      <View style={styles.container}>
        <Main />
      </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});