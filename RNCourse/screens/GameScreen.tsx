import {StyleSheet, View, Text } from "react-native";
import Title from "../components/Title";
const GameScreen = () => {
  return (
    <View style={styles.screen}>
      <Title>Opponent's guess</Title>
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
        padding: 24
    },
});
