import React from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";
import {
  createAppContainer,
  createMaterialTopTabNavigator
} from "react-navigation";
import Student from "../components/cell/Student";
import { fetchStudents } from "../apis";

class Enquiries extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Enquiries</Text>
      </View>
    );
  }
}

class Students extends React.Component {
  constructor(props) {
    super(props);
    state = {
      students: []
    };
  }
  componentDidMount() {
    fetchStudents().then(r => {
      this.setState(
        {
          students: [...r.dataList]
        },
        () => {
          console.warn(this.state.students);
        }
      );
    });
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.state && this.state.students.length > 0 ? (
          <FlatList
            data={this.state.students}
            keyExtractor={(item, index) => "key" + index.toString()}
            renderItem={({ item }) => <Student {...item} />}
          />
        ) : (
          <View />
        )}
      </View>
    );
  }
}

const TabNavigator = createMaterialTopTabNavigator(
  {
    Enquiries: { screen: Enquiries },
    Students: { screen: Students }
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
