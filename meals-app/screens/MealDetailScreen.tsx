import { Text } from "react-native";
import { HomeScreenMealDetail } from "../interfaces/Interfaces";

const MealDetailScreen = ({ route }: HomeScreenMealDetail) => {
    const mealId = route.params.mealId;
    return <Text>Meal detail screen ({mealId})</Text>;
};

export default MealDetailScreen;
