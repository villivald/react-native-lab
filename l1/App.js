import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { useState } from "react";

export default function App() {
  const [random, setRandom] = useState(0);
  const myFunc = () => setRandom(Math.floor(Math.random() * 100));

  return (
    <View style={styles.container}>
      <Text style={styles.randomNumber}>{random}</Text>
      <Button
        title="Press to generate random number"
        color="tomato"
        onPress={myFunc}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  randomNumber: {
    fontSize: 50,
    marginBottom: 20,
  },
});
