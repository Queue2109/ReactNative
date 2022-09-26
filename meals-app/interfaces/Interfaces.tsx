export interface IMealItem {
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
};

export interface ICategoryGridTiles {
    title: string;
    color: string;
    onPress: () => void;
}
