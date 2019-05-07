// import React from 'react';
// import { Text, View } from 'react-native';
// import { createBottomTabNavigator, createAppContainer, createMaterialTopTabNavigator } from 'react-navigation';

// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Home!</Text>
//       </View>
//     );
//   }
// }

// class SettingsScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Settings!</Text>
//       </View>
//     );
//   }
// }

// const TabNavigator = createMaterialTopTabNavigator({
//   Home: { screen: HomeScreen },
//   Settings: { screen: SettingsScreen },
// }, {
//   tabBarPosition: 'top',
//   tabBarOptions: {
//     activeTintColor: 'black',
//     inactiveTintColor: 'rgb(128, 128, 128)',
//     labelStyle: {
//       fontSize: 12,
//     },
//     indicatorStyle: {
//       backgroundColor: 'rgb(16, 207, 150)',
//       height: 4,
//     }
//   }
// });

// export default createAppContainer(TabNavigator);



/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Main from "./screens/Main";
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.welcome}>List of Enquiries</Text>
       <Main />
      </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  welcome: {
    fontSize: 14,
    textAlign: 'left',
    padding: 10,
    marginTop: 50,
    backgroundColor: 'rgb(0, 214, 154)',
    color: '#fff'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


{/* <View style={styles.container}> */}
{/* <Text style={styles.welcome}>Welcome to React Native!</Text> */}
  {/* <View style={styles.main}> */}
  {/* <Text style={styles.welcome}>Welcome to React Native!</Text> */}
  {/* </View> */}
  {/* <Text style={styles.welcome}>Welcome to React Native!</Text> */}
  {/* <Text style={styles.instructions}>To get started, edit App.js</Text> */}
  {/* <Text style={styles.instructions}>{instructions}</Text> */}
{/* </View> */}