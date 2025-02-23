import { createContext, useState, ReactNode } from 'react';
import { Planet } from '../types/planetTypes';
import { FavoritesContextType } from '@/types/contextTypes';

export const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<Planet[]>([]);

  const toggleFavorite = (planet: Planet) => {
    setFavorites((prev) =>
      prev.some((fav) => fav.id === planet.id)
        ? prev.filter((fav) => fav.id !== planet.id)
        : [...prev, planet]
    );
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};