import React, { Component } from "react";
import { Platform, View, Text } from "react-native";

export default class OS extends Component {
  render() {
    return (
      <View>
        <Text>Platform: {Platform.OS}</Text>
      </View>
    );
  }
}
