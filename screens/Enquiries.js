import React, { Component } from "react";
import InfoList from "../components/InfoList";

export default class Enquiries extends Component {
  componentDidMount() {
    this.props.navigation.addListener('willFocus', (route) => { this.props.eventHandler(route.state.routeName)});
  }
  render() {
    return (
      <InfoList type={'Enquiries'} navigation={this.props.navigation}/>
    );
  }
}