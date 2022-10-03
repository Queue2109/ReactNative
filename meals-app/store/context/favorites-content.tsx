import { createContext, useState } from "react";
import { IFavorites } from "../../interfaces/Interfaces";

export const FavoritesContext = createContext({
    ids: [] as number[],
    addFavorite: (id: number) => {},
    removeFavorite: (id: number) => {},
});

const FavoritesContexProvider = ({ children }: any) => {
    const [favoriteMealIds, setFavoriteMealIds] = useState<number[]>([]);
    const addFavorite = (id: number) => {
        setFavoriteMealIds((currentFavIds): number[] => [...currentFavIds, id]);
    };
    const removeFavorite = (id: number) => {
        setFavoriteMealIds((currentFavIds): number[] =>
            currentFavIds.filter((mealId) => mealId !== id)
        );
    };
    const value: IFavorites = {
        ids: favoriteMealIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite,
    };
    return (
        <FavoritesContext.Provider value={value}>
            {children}
        </FavoritesContext.Provider>
    );
};

export default FavoritesContexProvider;
