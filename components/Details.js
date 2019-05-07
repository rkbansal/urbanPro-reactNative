import React, { Component } from 'react';
import { View, StyleSheet, Text, Linking, Platform } from 'react-native';
import FontAwesome, { Icons, IconTypes } from 'react-native-fontawesome';

import { getRandomColor } from '../lib/helper';
import Avatar from './Avatar';
import { ExtraDetailAttributes } from '../constants';
import Star from './Start';


export default class Details extends Component {

  constructor(props){
    super(props);
    this.state = {
      avatarColor: getRandomColor(),
      extraDetails: []
    }
  }

  componentDidMount() { 
    let extraDetails = [];
    const attributes = ExtraDetailAttributes[this.props.type];
    for (const key in attributes) {
        const attribute = attributes[key]
        if (attributes.hasOwnProperty(key) && this.props[attribute]) {
            
            extraDetails.push(this.props[attribute]);
        }
    }
    this.setState({extraDetails});
  }

  getExtraDetails(){
    
    if(!this.state.extraDetails) return  <View />;

    return this.state.extraDetails.map((detail,key)=>{
        return <Text key={key}>
            {detail}
        </Text>
    })
  }

  onPressCall(phoneNumber){
    const prefix = Platform.OS !== 'android'?'telprompt:':'tel:';
    const url = prefix+phoneNumber;
    
	Linking.canOpenURL(url)
		.then((supported) => {
			if (supported) {
				return Linking.openURL(url)
					.catch(() => null);
			}
		});

  }

  render() {
    const {platformTag, dataType, created, createdOn, name, phoneNumber, isStarred } = this.props;
    return (
      <View style={styles.top}>
        <View style={styles.avatar}>
          <Avatar name={name[0]} />
        </View>
        <View style={styles.right}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{ fontSize:16, fontWeight: '700'}} >{name || ""}</Text>
            <Text style={styles.platform}>{ platformTag || dataType && 'New'}</Text>
          </View>
          <View>
            {
                this.getExtraDetails()
            }
          </View>
        </View>
        <Text style={styles.created}>{ created || createdOn}</Text>
            <Text onPress={()=>{this.onPressCall(phoneNumber)}} >
                Call now
                {/* <FontAwesome>{Icons.phoneSquare}</FontAwesome> */}
            </Text>

        <Star isStarred={isStarred}></Star>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  avatar:{
    margin: 10
  },
  top: {
    flexDirection: 'row',
    borderWidth: 0.7,
    borderColor: '#d6d7da',
    padding: 10,
    lineHeight: 10
  },

  right: {
    flex: 12,
  },
  platform: {
    marginLeft: 7,
    color: 'rgb(242,143,92)'
  },
  created:{
    justifyContent: 'flex-end'
  }
})