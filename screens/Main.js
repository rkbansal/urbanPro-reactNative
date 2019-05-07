import React from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";
import {
  createAppContainer,
  createMaterialTopTabNavigator
} from "react-navigation";
import InfoList from "../components/InfoList";


class Enquiries extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <InfoList type={'Enquiries'}/>
    );
  }
}

class Students extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <InfoList type={'Students'}/>
    );
  }
}

const TabNavigator = createMaterialTopTabNavigator(
  {
    Students: { screen: Students },
    Enquiries: { screen: Enquiries },
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
      }
    },
    lazy: true
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
});
export default createAppContainer(TabNavigator);
