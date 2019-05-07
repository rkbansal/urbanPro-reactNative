import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Icon from "../components/Icon";

class DetailScreen extends React.Component {
  params = {};
  constructor(props){
    super(props);
    this.params = props.navigation.state.params;
    this.navigation = props.navigation
  }

  render() {
    return (
      <View style={styles.screen}>
        <Text onPress={()=>{this.navigation.goBack()}} >
          <Icon
            type="Entypo"
            name="back"
            color="rgb(57, 193, 0)"
            size={25}
          />
        </Text>
        {Object.entries(this.params).map((ele)=>{
          return (
            <View style={styles.row} key={ele[0]}>
              <Text style={styles.key}>{ele[0]}:</Text>
              <Text style={styles.value}>{ele[1]}</Text>
            </View>)
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    minHeight: 25,
    borderWidth: 0.7,
    borderColor: '#d6d7da',
  },
  key: {
    fontSize: 14,
    width: 160,
    fontWeight: "600"
  },
  value: {
    fontSize: 14
  }
});
export default DetailScreen;