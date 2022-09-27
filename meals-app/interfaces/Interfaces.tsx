import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type HomeScreenMealDetail = NativeStackScreenProps<
    RootStackParamList,
    "MealDetail"
>;
export type HomeScreenMealsOverview = NativeStackScreenProps<
    RootStackParamList,
    "MealsOverview"
>;

export type HomeScreenMealsCategories = NativeStackScreenProps<
    RootStackParamList,
    "MealsCategories"
>;

export interface IMealItems {
    item: {
        id: string;
        categoryIds: string;
        title: string;
        affordability: string;
        complexity: string;
        imageUrl: string;
        duration: string;
        ingredients: string;
        steps: string;
        isGlutenFree: boolean;
        isVegan: boolean;
        isVegetarian: boolean;
        isLactoseFree: boolean;
    };
}

export interface ICategories {
    item: {
        id: string;
        title: string;
        color: string;
    };
}

export type RootStackParamList = {
    MealsCategories: {
        categoryId: string;
    };
    MealsOverview: {
        categoryId: string;
    };
    MealDetail: {
        mealId?: string;
    };
};

export interface ICategoryGridTiles {
    title: string;
    color: string;
    onPress: () => void;
}

export interface IMealItemView {
    id: string;
    title: string;
    imageUrl: string;
    duration: string;
    affordability: string;
    complexity: string;
}
