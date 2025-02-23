import { Planet } from "./planetTypes";

export interface FavoritesContextType {
  favorites: Planet[];
  toggleFavorite: (planet: Planet) => void;
}

export interface SortContextType {
    sortAsc: boolean;
    toggleSort: () => void;
  }