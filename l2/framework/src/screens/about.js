import { View, Text, Button, StyleSheet } from "react-native";
import { screens } from ".";

export default ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pages</Text>
      <View style={styles.buttonContainer}>
        {screens.slice(1, screens.length).map(({ name, component }) => (
          <Button
            key={name}
            onPress={() => navigation.navigate(component)}
            title={name}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 30,
    alignSelf: "center",
    marginTop: 10,
  },
  buttonContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "40px",
    marginTop: "40px",
  },
});
