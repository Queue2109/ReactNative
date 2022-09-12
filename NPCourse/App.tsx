import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your course goal"></TextInput>
        <Button title="Add goal"/>
      </View>
      <View>
        <Text>List of goals:</Text>
      </View>
    </View>
  );
}
// to avoid copy and pasting styles, you should use the following function:

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
  inputContainer: {
    flexDirection:  "row",
    justifyContent: "space-between"
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '80%',
    marginRight: 8,
    padding: 8
  }
});
