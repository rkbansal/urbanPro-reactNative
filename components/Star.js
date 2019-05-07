import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, Button } from 'react-native';
import { getRandomColor } from '../lib/helper';

export default class Star extends Component {

  constructor(props){
    super(props);
    this.state = {
        isStarred : this.props.isStarred
    }
  }
  componentDidMount() {}

  onStartClick=()=>{
    this.setState({isStarred: !this.state.isStarred})
  }

  render() {
    return (
        <View >
          <Text
              onPress={this.onStartClick}
            >
          {
              this.state && this.state.isStarred? 
              <Image style={styles.image} source={require( '../assets/star-filled.png' )} />:
              <Image style={styles.image} source={require( '../assets/star-unfilled.png' )} />
          }
          </Text>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    height:15,
    width: 15,
    justifyContent: 'flex-end'
  }
})