import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import { HomeScreenMealDetail, IMealItem } from "../interfaces/Interfaces";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import { useContext, useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../components/store/context/favorites-content";

const MealDetailScreen = ({ route, navigation }: HomeScreenMealDetail) => {
    const favoriteMealsContext = useContext(FavoritesContext);

    const mealId: any = route.params.mealId;
    const mealIsFavorite: boolean = favoriteMealsContext.ids.includes(mealId);
    const selectedMeal: any = MEALS.find((meal: any) => meal.id === mealId);
    const changeFavoritePressHandler = () => {
        if (mealIsFavorite) {
            favoriteMealsContext.removeFavorite(mealId);
        } else {
            favoriteMealsContext.addFavorite(mealId);
        }
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <IconButton
                        icon={mealIsFavorite ? "star" : "star-outline"}
                        color="white"
                        onPress={changeFavoritePressHandler}
                    />
                );
            },
        });
    }, []);
    return (
        <ScrollView style={styles.rootContainer}>
            <Image
                style={styles.image}
                source={{ uri: selectedMeal.imageUrl }}
            />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
                textStyle={styles.detailText}
            />
            <View style={styles.outerListContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={selectedMeal.ingredients} />
                    <Subtitle>Steps</Subtitle>
                    <List data={selectedMeal.steps} />
                </View>
            </View>
        </ScrollView>
    );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 350,
    },
    title: {
        fontWeight: "bold",
        fontSize: 24,
        margin: 8,
        textAlign: "center",
        color: "white",
    },
    detailText: {
        color: "white",
    },
    listContainer: {
        maxWidth: "80%",
    },
    outerListContainer: {
        alignItems: "center",
    },
    rootContainer: {
        marginBottom: 32,
    },
});
