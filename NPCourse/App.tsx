import { StyleSheet, View, FlatList, Button } from "react-native";
import { useState} from "react";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  interface ICourseGoals {
    text: string;
    id: string;
  }
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const [courseGoals, setCourseGoals] = useState<ICourseGoals[]>([]);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  }

  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  }

  const addGoalHandler = (enteredGoalText: string) => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  };

  const deleteGoalHandler = (id: string) => {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  };

  return (
    <View style={styles.appContainer}>
      <Button title="Add New Goal" color="#5e0acc" onPress={startAddGoalHandler}/>
      <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                id={itemData.item.id}
                text={itemData.item.text}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
          // alternative for making unique ids for elements. item.id... idk try it someday
          //keyExtractor={(item, index) => {
          // return item.id;
          //}}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    flex: 1,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
