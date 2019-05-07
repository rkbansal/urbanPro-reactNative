import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import DetailScreen from "./DetailScreen";
import {
  createAppContainer,
  createMaterialTopTabNavigator,
  createStackNavigator
} from "react-navigation";
import Enquiries from "./Enquiries";
import Students from "./Students";

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      headerText: "Students"
    }
  }

  TabNavigator = createMaterialTopTabNavigator(
    {
      Students: props => <Students {...props} eventHandler={this.eventHandler}/>,
      Enquiries: props => <Enquiries {...props} eventHandler={this.eventHandler}/>,
    },
    {
      tabBarPosition: "top",
      tabBarOptions: {
        activeTintColor: "black",
        inactiveTintColor: "rgb(128, 128, 128)",
        labelStyle: {
          fontSize: 12
        },
        indicatorStyle: {
          backgroundColor: "rgb(16, 207, 150)",
          height: 4
        },
        pressColor: 'gray',
        style: {
          backgroundColor: 'white',//color you want to change
        }
      }
    }
  );
  
  myApp = createStackNavigator({
    Tabs: {
      screen: this.TabNavigator
    },
    DetailScreen: {screen: DetailScreen}
  }, {
    initialRouteName: "Tabs",
    headerMode: 'none'
  });
  
  MyAppContainer = createAppContainer(this.myApp);

  eventHandler = (route) => {
    this.setState({
      headerText: route
    })
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Text style={styles.welcome}>List of {this.state.headerText}</Text>
        <this.MyAppContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'left',
    lineHeight: 55,
    padding: 10,
    height: 55,
    marginTop: 0,
    backgroundColor: 'rgb(0, 214, 154)',
    color: '#fff'
  }
});

export default Main;
