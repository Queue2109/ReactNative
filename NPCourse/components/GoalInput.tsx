import { View, TextInput, Button, StyleSheet, Modal } from "react-native";
import { useState } from "react";

const GoalInput = (props:any) => {

  const [enteredGoalText, setEnteredGoalText] = useState('');

  const goalInputHandler = (enteredText: string) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }
  

  return (
    <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
            <TextInput
            style={styles.textInput}
            placeholder="Your course goal"
            onChangeText={goalInputHandler}
            value={enteredGoalText} />
                            
            <Button title="Add goal" onPress={addGoalHandler} />
        </View>
    </Modal>);
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "80%",
    marginRight: 8,
    padding: 8,
  },
});
export default GoalInput;
