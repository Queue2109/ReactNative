import { useContext } from "react";
import MealsList from "../components/MealsList/MealsList";
import { FavoritesContext } from "../components/store/context/favorites-content";
import { MEALS } from "../data/dummy-data";
import { View, Text, StyleSheet } from "react-native";

const FavoritesScreen = () => {
    const favoriteMealsContext = useContext(FavoritesContext);
    const favoriteMeals = MEALS.filter((meal: any) =>
        favoriteMealsContext.ids.includes(meal.id)
    );

    if (favoriteMeals.length === 0) {
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.text}>You have no favorite meal yet!</Text>
            </View>
        );
    }

    return <MealsList items={favoriteMeals} />;
};
export default FavoritesScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,

        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontWeight: "bold",
        fontSize: 18,
        color: "white",
    },
});
