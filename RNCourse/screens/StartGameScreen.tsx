import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
};
export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        padding: 16,
        marginTop: 100,
        marginHorizontal: 24,
        borderRadius: 8,
        backgroundColor: '#72063c',
        //adding a shadow... elevation has levels, the higher level, the more shadow
        //it's an android only
        elevation: 4,
        //this works for iOS too
        shadowColor: 'black',
        shadowOffset: {width: 0, height:2},
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
});