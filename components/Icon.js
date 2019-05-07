import React from "react";
import { Platform } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";

const iconGroup = {
  "MaterialCommunityIcons": MaterialCommunityIcons,
  "Entypo": Entypo
}

export default ({ name, type, ...props }) => {
  const IconType = iconGroup[type];
  if(IconType){
    return <IconType name={name} {...props}/>
  }
  return (
    <Icon
      name={Platform.OS === "ios" ? `ios-${name}` : `md-${name}`}
      {...props}
    />
  )
};

