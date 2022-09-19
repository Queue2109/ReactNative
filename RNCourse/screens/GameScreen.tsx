import { StyleSheet, View, Text } from "react-native";
import Title from "../components/ui/Title";
import { useState } from "react";
import NumberContainer from "../components/game/NumberContainer";

//excluded number is the one that is typed in by the user
const generateRandomBetween = (
  min: number,
  max: number,
  exclude: number
): void | number => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const GameScreen = ({ userNumber }: any) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentState] = useState<void | number>(initialGuess);

  return (
    <View style={styles.screen}>
      <Title>Opponent's guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or lower?</Text>
        {/*   + -   */}
      </View>
      <View>{/*LOG ROUNDS</View>*/}</View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
