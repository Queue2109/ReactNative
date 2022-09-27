import { CATEGORIES, MEALS } from "../data/dummy-data";
import { FlatList, View, StyleSheet } from "react-native";
import MealItem from "../components/MealItem";
import { IMealItems } from "../interfaces/Interfaces";
import { useLayoutEffect } from "react";
import { HomeScreenMealsOverview } from "../interfaces/Interfaces";

const MealsOverview = ({ route, navigation }: HomeScreenMealsOverview) => {
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

    const renderMealItem = (itemData: IMealItems) => {
        const item = itemData.item;
        const mealItemProps = {
            id: item.id,
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
