import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/colors";

const StartGameScreen = ({ onPickNumber }: any) => {
  const [enteredNumber, setEnteredNumber] = useState<string>("");

  const numberInputHandler = (enteredText: string) => {
    setEnteredNumber(enteredText);
  };

  const resetInputHandler = () => {
    setEnteredNumber("");
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);
    // is not a number
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      // show alert
      // alert needs a title, message and configurations of buttons

      Alert.alert(
        "Invalid number",
        "Number has to be a number between 1 and 99.",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    onPickNumber(chosenNumber);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        onChangeText={numberInputHandler}
        autoCorrect={false}
        // add a value, otherwise you will have some problems
        value={enteredNumber}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainter}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainter}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};
export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: Colors.primary800,
    //adding a shadow... elevation has levels, the higher level, the more shadow
    //it's an android only
    elevation: 4,
    //this works for iOS too
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainter: {
    flex: 1,
  },
});
