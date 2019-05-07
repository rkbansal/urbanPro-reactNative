import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { getRandomColor } from '../lib/helper';

export default class Avatar extends Component {

  constructor(props){
    super(props);
    this.state = {
      avatarColor: getRandomColor()
    }
  }
  componentDidMount() {}


  render() {
    return (
        <View style={[styles.avatar, {backgroundColor: this.state.avatarColor}]}>
            <Text>{this.props.name || ""}</Text>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  }
})