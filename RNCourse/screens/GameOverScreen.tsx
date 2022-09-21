import { View, Image, StyleSheet, Text } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";

const GameOverScreen = () => {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>

      <Text>Your phone needed X rounds to guess the number Y</Text>
    </View>
  );
};
export default GameOverScreen;

const styles = StyleSheet.create({
  imageContainer: {
    //radius should be half of the width
    borderRadius: 150,
    width: 300,
    height: 300,
    borderWidth: 3,
    color: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
});
