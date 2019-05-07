import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

export default class Star extends Component {

  constructor(props){
    super(props);
    this.state = {
        isStarred : this.props.isStarred
    }
  }

  onStarClick=()=>{
    this.setState({isStarred: !this.state.isStarred})
  }

  render() {
    return (
        <View >
          <Text
              onPress={this.onStarClick}
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