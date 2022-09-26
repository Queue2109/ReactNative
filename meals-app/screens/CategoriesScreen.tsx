import { CATEGORIES } from "../data/dummy-data";
import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTiles";
import React from "react";
import { ICategories, RootStackParamList } from "../interfaces/Interfaces";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type HomeScreen = NativeStackScreenProps<RootStackParamList, "MealsCategories">;

const CategoriesScreen = ({ navigation }: HomeScreen) => {
    const renderCategoryItem = (itemData: ICategories) => {
        const pressHandler = () => {
            // simply use the page name that you want to navigate to
            navigation.navigate("MealsOverview", {
                categoryId: itemData.item.id,
            });
        };
        return (
            <CategoryGridTile
                title={itemData.item.title}
                color={itemData.item.color}
                onPress={pressHandler}
            />
        );
    };
    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}
            numColumns={2}
        />
    );
};
export default CategoriesScreen;
