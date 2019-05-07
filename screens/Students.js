import React, { Component } from "react";
import InfoList from "../components/InfoList";

export default class Students extends Component {
  componentDidMount() {
    this.props.navigation.addListener('willFocus', (route) => { this.props.eventHandler(route.state.routeName)});
  }
  render() {
    return (
      <InfoList type={'Students'} navigation={this.props.navigation}/>
    );
  }
}