import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { TextStyle } from "react-native";

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

// modify this, it's ugly!!!!
export interface IMealItem {
    id: number;
    categoryIds: number[];
    title: string;
    affordability: string;
    complexity: string;
    imageUrl: string;
    duration: number;
    ingredients: string[];
    steps: string[];
    isGlutenFree: boolean;
    isVegan: boolean;
    isVegetarian: boolean;
    isLactoseFree: boolean;
}

export interface IMealItems {
    item: IMealItem;
}

export interface ICategory {
    id: number;
    title: string;
    color: string;
}

export interface ICategories {
    item: ICategory;
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
    Drawer?: {
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
    duration: number;
    affordability: string;
    complexity: string;
}

export interface IMealItemComponent {
    duration: number;
    affordability: string;
    complexity: string;
    style?: TextStyle;
    textStyle?: TextStyle;
}

export interface ISubtitles {
    children: string;
}

// this shit uglyyyyyyyyy
export interface IList {
    data: any;
}

export interface IIconButton {
    // ugly
    icon: any;
    color: string;
    onPress: () => void;
}

export interface IDrawer {
    name: string;
    component: any;
}

export interface IIonicons {
    color: string,
    size: number
}

export interface IFavorites {
    ids: number[],
    addFavorite: (num:number) => void,
    removeFavorite: (num:number) => void
}