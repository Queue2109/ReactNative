import { CATEGORIES, MEALS } from "../data/dummy-data";
import { FlatList, View, StyleSheet } from "react-native";
import MealItem from "../components/MealItem";
import { IMealItem } from "../interfaces/Interfaces";
import { useLayoutEffect } from "react";

import { RootStackParamList } from "../interfaces/Interfaces";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type HomeScreen = NativeStackScreenProps<RootStackParamList, "MealsOverview">;

const MealsOverview = ({ route, navigation }: HomeScreen) => {
    // params are things you added to navigation prop
    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });

    // useLayoutEffect executes before the page loads, so applies changes quicker

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find(
            (category) => category.id === catId
        )?.title;

        navigation.setOptions({
            title: categoryTitle,
        });
    }, [catId, navigation]);

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
