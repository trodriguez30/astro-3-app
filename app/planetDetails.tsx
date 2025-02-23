import { View, Text, StyleSheet, Button } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { useFavorites } from "@/hooks/useFavorites";
import { Planet } from "@/types/planetTypes";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Loading from "@/components/Loading";
import EmptyState from "@/components/EmptyState";
import errorAnimation from "@/assets/animations/error.json";

const PlanetDetails = () => {
  const insets = useSafeAreaInsets();
  const { id } = useLocalSearchParams();
  const { favorites, toggleFavorite } = useFavorites();
  const [planetDetails, setPlanetDetails] = useState<Planet | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const isFavorite = favorites.some((planet) => planet.id === id);

  useEffect(() => {
    const fetchPlanetDetails = async () => {
      try {
        const response = await fetch(
          `https://api.le-systeme-solaire.net/rest/bodies/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch planet details");
        }
        const data = await response.json();
        setPlanetDetails({
          id: data.id,
          name: data.name,
          englishName: data.englishName,
          isPlanet: data.isPlanet,
          mass: data.mass,
          gravity: data.gravity,
        });
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchPlanetDetails();
    }
  }, [id]);

  if (loading) {
    return (
      <View style={styles.container}>
        <Loading />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <EmptyState
          animation={errorAnimation}
          message="An error occurred while fetching planet details. Please try again."
        />
      </View>
    );
  }

  if (!planetDetails) {
    return (
      <View style={styles.container}>
        <EmptyState message="Planet details not available. Please try again later." />
      </View>
    );
  }

  return (
    <View
      style={[
        styles.container,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
      <Text style={styles.title}>{planetDetails.englishName}</Text>
      <Text style={styles.subtitle}>ID: {planetDetails.id}</Text>
      <Text style={styles.description}>
        Mass: {planetDetails.mass?.massValue} x 10^
        {planetDetails.mass?.massExponent} kg
      </Text>
      <Text style={styles.description}>
        Gravity: {planetDetails.gravity} m/s²
      </Text>
      <Button
        title={isFavorite ? "Remove from favorites" : "Add to favorites"}
        onPress={() => toggleFavorite(planetDetails)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#0B0F2F",
  },
  title: {
    fontSize: 28,
    color: "#fff",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#ccc",
  },
  description: {
    fontSize: 16,
    color: "#aaa",
    marginTop: 20,
  },
});

export default PlanetDetails;
