import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Dimensions, Platform } from "react-native";
import OrientationComponent from "./OrientationComponent";

export default function App() {
  const [windowWidth, setWindowWidth] = useState(
    Dimensions.get("window").width
  );
  const [windowHeight, setWindowHeight] = useState(
    Dimensions.get("window").height
  );

  Dimensions.addEventListener("change", (e) => {
    setWindowWidth(e.window.width);
    setWindowHeight(e.window.height);
  });

  return (
    <View style={styles.container}>
      <Text>Dimensions</Text>
      <Text>Width: {windowWidth}</Text>
      <Text>Height: {windowHeight}</Text>
      {Platform.OS !== "web" && <OrientationComponent />}
      <StatusBar style="auto" />
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
});
