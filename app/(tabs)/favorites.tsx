import { View, FlatList, StyleSheet } from "react-native";
import { useFavorites } from "@/hooks/useFavorites";
import PlanetCard from "@/components/PlanetCard";
import { useSort } from "@/hooks/useSort";
import EmptyState from "@/components/EmptyState";
import { COLORS, SIZES } from "@/styles/theme";

const Favorites = () => {
  // Get favorite planets and the current sort state (ascending or descending)
  const { favorites } = useFavorites();
  const { sortAsc } = useSort();

  // Sort planets alphabetically based on their English name
  const filteredPlanets = favorites.sort((a, b) =>
    sortAsc
      ? a.englishName.localeCompare(b.englishName)
      : b.englishName.localeCompare(a.englishName)
  );

  return (
    <View style={styles.container}>
      {filteredPlanets.length === 0 ? (
        <EmptyState message="You haven't added any planets to your favorites yet." />
      ) : (
        <FlatList
          data={filteredPlanets}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <PlanetCard planet={item} />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: SIZES.extra,
    paddingTop: 0,
  },
});

export default Favorites;
