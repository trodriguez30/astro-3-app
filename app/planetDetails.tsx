import { View, Text, StyleSheet, Button, ActivityIndicator } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { useFavorites } from '../hooks/useFavorites';
import { Planet } from '../types/planetTypes';

const PlanetDetails = () => {
  const { id } = useLocalSearchParams();
  const { favorites, toggleFavorite } = useFavorites();
  const [planetDetails, setPlanetDetails] = useState<Planet | null>(null);
  const [loading, setLoading] = useState(true);

  const isFavorite = favorites.some((planet) => planet.id === id);

  useEffect(() => {
    if (id) {
      fetch(`https://api.le-systeme-solaire.net/rest/bodies/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setPlanetDetails({
            id: data.id,
            name: data.name,
            englishName: data.englishName,
            isPlanet: data.isPlanet,
            mass: data.mass,
            gravity: data.gravity
          });
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  if (!planetDetails) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>No se encontraron detalles.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{planetDetails.englishName}</Text>
      <Text style={styles.subtitle}>ID: {planetDetails.id}</Text>
      <Text style={styles.description}>Masa: {planetDetails.mass?.massValue} x 10^{planetDetails.mass?.massExponent} kg</Text>
      <Text style={styles.description}>Gravedad: {planetDetails.gravity} m/s²</Text>
      <Button
        title={isFavorite ? 'Eliminar de favoritos' : 'Agregar a favoritos'}
        onPress={() => toggleFavorite(planetDetails)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#1e1e1e',
  },
  title: {
    fontSize: 28,
    color: '#fff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#ccc',
  },
  description: {
    fontSize: 16,
    color: '#aaa',
    marginTop: 20,
  },
});

export default PlanetDetails;
