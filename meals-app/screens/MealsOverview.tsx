import { CATEGORIES, MEALS } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import { HomeScreenMealsOverview } from "../interfaces/Interfaces";
import MealsList from "../components/MealsList/MealsList";

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
    return <MealsList items={displayedMeals} />;
};
export default MealsOverview;
