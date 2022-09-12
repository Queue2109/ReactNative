import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.dummyText}
        >
          text
        </Text>
      </View>
      <Text style={styles.dummyText}
      >
        Hello world!!
      </Text>
      <Button title="Tap me" />
    </View>
  );
}
// to avoid copy and pasting styles, you should use the following function:

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  dummyText: {
    margin: 16,
    borderWidth: 2,
    borderColor: "red",
    padding: 16,
  }
});
