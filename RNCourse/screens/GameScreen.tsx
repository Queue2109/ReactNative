import {StyleSheet, View, Text } from "react-native";

const GameScreen = () => {
  return (
    <View>
      <Text>Opponent's guess</Text>
      {/*GUESS(*/}
      <View>
        <Text>Higher or lower?</Text>
        {/*   + -   */}
      </View>
      <View>
        {/*LOG ROUNDS</View>*/}
        </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1, 
        padding: 20
    },
});
