import { StyleSheet, View } from "react-native";
import Colors from "../../constants/colors";

const Card = ({ children }: any) => {
  return <View style={styles.card}>{children}</View>;
};
export default Card;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 36,
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
});
