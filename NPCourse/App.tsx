import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your course goal"></TextInput>
        <Button title="Add goal"/>
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of goals:</Text>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  // by default, it takes only as much space as it needs
  // force it to take all of the space
  appContainer: {
    paddingTop: 50,
    flex: 1,
    paddingHorizontal: 16    
  },
  inputContainer: {
    flex: 1,
    flexDirection:  "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'

  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '80%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 5,
  }
});
