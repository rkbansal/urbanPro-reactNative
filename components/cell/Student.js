import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class Student extends Component {

  constructor(props){
    super(props);
    this.state = {
      avatarColor: ""
    }
  }
  componentDidMount() {
    this._getRandomColor()
  }

  _getRandomColor = () => {
    const avatarColor = `rgb(${Math.round(Math.random()*256)},${Math.round(Math.random()*256)},${Math.round(Math.random()*256)}) `;
    this.setState({
      avatarColor: avatarColor
    })
  }

  render() {
    return (
      <View style={{flexDirection: 'row', borderWidth: 0.5,
      borderColor: '#d6d7da', padding: 10}}>
        <View style={styles.left}>
          <View style={[styles.avatar, {backgroundColor: this.state.avatarColor}]}>
            <Text>{this.props.name[0] || ""}</Text>
          </View>
        </View>
        <View style={styles.right}>
          <View style={{flexDirection: 'row'}}>
            <Text>{this.props.name || ""}</Text>
            <Text style={styles.platform}>{this.props.platformTag || ""}</Text>
          </View>
          <Text>{this.props.category || ""}</Text>
          <Text>{this.props.batchName}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  left: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    marginRight: 5
  },
  avatar: {
    width: 25,
    height: 25,
    right: 0,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  right: {
    flex: 5
  },
  platform: {
    color: 'rgb(242,143,92)'
  }
})