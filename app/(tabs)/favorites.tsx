import { View, FlatList, StyleSheet } from 'react-native';
import { useFavorites } from '../../hooks/useFavorites';
import PlanetCard from '../../components/PlanetCard';
import { useSort } from '@/hooks/useSort';

const Favorites = () => {
  const { favorites } = useFavorites();
  const { sortAsc } = useSort();

  const filteredPlanets = favorites
  .sort((a, b) =>
    sortAsc
      ? a.englishName.localeCompare(b.englishName)
      : b.englishName.localeCompare(a.englishName)
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredPlanets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PlanetCard planet={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B0F2F",
    padding: 16,
    paddingTop: 0,
  },
});

export default Favorites;