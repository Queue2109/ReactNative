import { createContext } from "react";

export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id: number) => {},
    removeFavorite: (id: number) => {},
});

const FavoritesContexProvider = ({ children }: any) => {
    return <FavoritesContext.Provider>{children}</FavoritesContext.Provider>;
};

export default FavoritesContexProvider;
