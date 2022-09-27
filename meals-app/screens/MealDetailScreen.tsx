import { Text, View, Image } from "react-native";
import { HomeScreenMealDetail, IMealItem } from "../interfaces/Interfaces";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";

const MealDetailScreen = ({ route }: HomeScreenMealDetail) => {
    const mealId = route.params.mealId;
    // change the type !!!!
    const selectedMeal: any = MEALS.find((meal) => meal.id === mealId);
    return (
        <View>
            <Image source={{ uri: selectedMeal.imageUrl }} />
            <Text>{selectedMeal.title}</Text>
            <MealDetails
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
            />
            <Text>Ingredients</Text>
            {selectedMeal.ingredients.map((ingredient: string) => (
                <Text key={ingredient}>{ingredient}</Text>
            ))}
            <Text>Steps</Text>
            {selectedMeal.steps.map((step: string) => {
                <Text key={step}>{step}</Text>;
            })}
        </View>
    );
};

export default MealDetailScreen;
