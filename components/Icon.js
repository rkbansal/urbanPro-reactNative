import React from "react";
import { Platform } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
export default ({ name, type, ...props }) => {
  if(type && type == "MaterialCommunityIcons"){
    return (<MaterialCommunityIcons name={name} {...props}/>)
  }
  return (
    <Icon
      name={Platform.OS === "ios" ? `ios-${name}` : `md-${name}`}
      {...props}
    />
  )
};

