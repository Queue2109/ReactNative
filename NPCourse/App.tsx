import {
  StyleSheet,
  View,
  FlatList,
} from "react-native";
import { useState, useSyncExternalStore } from "react";

import GoalItem  from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  interface ICourseGoals {
    text: string;
    id: string;
  }
  const [courseGoals, setCourseGoals] = useState<ICourseGoals[]>([]);

  const addGoalHandler = (enteredGoalText:string) => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  };


  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler}/>
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
              return <GoalItem id={itemData.item.id} text={itemData.item.text}  />;
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
