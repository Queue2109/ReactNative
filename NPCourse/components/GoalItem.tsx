import { StyleSheet, View, Text} from "react-native";


const GoalItem = (props:any) => {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{props}</Text>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "purple",
  },
  goalText: {
    color: "white",
  },
});
