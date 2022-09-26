import { MEALS } from "../data/dummy-data";
import { FlatList, View, StyleSheet } from "react-native";
import MealItem from "../components/MealItem";
import { IMealItem } from "../interfaces/Interfaces";

import { RootStackParamList } from "../interfaces/Interfaces";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type HomeScreen = NativeStackScreenProps<RootStackParamList, "MealsOverview">;

const MealsOverview = ({ route }: HomeScreen) => {
    // params are things you added to navigation prop
    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });

    const renderMealItem = (itemData: IMealItem) => {
        const item = itemData.item;
        const mealItemProps = {
            title: item.title,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration,
        };
        return <MealItem {...mealItemProps} />;
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={displayedMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />
        </View>
    );
};
export default MealsOverview;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});
