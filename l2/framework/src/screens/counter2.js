import React, { Component } from "react";
import { StyleSheet, Text, Button, View } from "react-native";

export default class Counter2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Count: {this.state.count}</Text>
        <View style={styles.buttonContainer}>
          <Button
            title="+"
            onPress={() => this.setState({ count: this.state.count + 1 })}
          />
          <Button
            title="-"
            onPress={() => this.setState({ count: this.state.count - 1 })}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    alignSelf: "center",
  },
  buttonContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "50px",
    marginTop: "50px",
  },
});
