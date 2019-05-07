import React from "react";
import { View, FlatList } from "react-native";
import { getDetails } from "../apis";
import Details from "./Details";

export default class InfoList extends React.Component {  
  
  constructor(props) {
    super(props);
    state = {
      details: []
    };
  }
  componentDidMount() {
      getDetails(this.props.type).then(result => {
      this.setState(
        {
          details: [...result.dataList],
          dataType: result.type          
        }
      );
    });
  }

  render() {
    if(!this.state) return <View />
    const {details, dataType} = this.state;
    return (
      <View style={{ flex: 1 }}>
        {
          this.state && this.state.details.length &&
          <FlatList
              data={this.state.details}
              keyExtractor={(item, index) => "key" + index}
              renderItem={({ item }) => <Details {...item} type={this.props.type} dataType={ dataType } navigation={this.props.navigation}/>}
          />
        }
      </View>
    )
  }

}
  