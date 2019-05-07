import React, { Component } from 'react';
import { View, StyleSheet, Text, Linking, Platform, TouchableHighlight } from 'react-native';
import { getRandomColor } from '../lib/helper';
import Avatar from './Avatar';
import { ExtraDetailAttributes, Enquiries, Students } from '../constants';
import Icon from "./Icon";
import Star from './Star';


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
        return (
        <Text style={styles.content} key={key}>
            {detail}
        </Text>
        )
    })
  }

  getActions(){
    const {type, isStarred, phoneNumber} = this.props;
    return (
      <View style={styles.actions}>
        {type == Enquiries && (<Icon
            type="MaterialCommunityIcons"
            name="dots-vertical"
            color="rgb(102, 102, 102)"
            size={20}
        />)}
        <Text onPress={()=>{this.onPressCall(phoneNumber)}} >
          <Icon
            name="call"
            color="rgb(57, 193, 0)"
            size={15}
          />
        </Text>
        {type == Students && <Star isStarred={isStarred}></Star>}
      </View>
    );
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

  _onPressButton = () => {
    const {navigation, ...props} = this.props;
    this.props.navigation.navigate("DetailScreen", props);
  }

  render() {
    const {platformTag, dataType, created, createdOn, name } = this.props;
    return (
      <TouchableHighlight onPress={this._onPressButton}>
      <View style={styles.top}>
          <View style={styles.avatar}>
            <Avatar name={name[0]} />
          </View>
          <View style={styles.right}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.name} >{name || ""}</Text>
              <Text style={styles.platform}>{ platformTag || dataType && 'New'}</Text>
            </View>
            <View>
              {
                  this.getExtraDetails()
              }
            </View>
          </View>
          <Text style={styles.created}>{ created || createdOn}</Text>
          {this.getActions()}
      </View>
      </TouchableHighlight>
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
  name: {
    fontSize:14,
    fontWeight: '700'
  },
  platform: {
    marginLeft: 7,
    color: 'rgb(242,143,92)',
    fontSize:14
  },
  created:{
    justifyContent: 'flex-end'
  },
  content: {
    fontSize: 11
  },
  actions: {
    flexDirection:'column',
    justifyContent: "space-between",
    alignItems: "center"
  }
})