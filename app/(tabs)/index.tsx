import React, { useCallback, useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { Planet } from "@/types/planetTypes";
import PlanetCard from "@/components/PlanetCard";
import InputWithIcon from "@/components/InputWithIcon";
import { useSort } from "@/hooks/useSort";
import Loading from "@/components/Loading";
import EmptyState from "@/components/EmptyState";
import errorAnimation from "@/assets/animations/error.json";
import { COLORS, SIZES } from "@/styles/theme";

const Planets = () => {
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(false);
  const { sortAsc } = useSort();

  // Fetch planet data from the API
  const fetchPlanets = useCallback(async () => {
    try {
      setRefreshing(true);
      setError(false);
      const response = await fetch(
        "https://api.le-systeme-solaire.net/rest/bodies/"
      );
      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.status}`);
      }

      const data = await response.json();
      const filteredPlanets = data.bodies.filter(
        (body: Planet) => body.isPlanet // Filter only planets from the API response
      );

      setPlanets(filteredPlanets);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    fetchPlanets();
  }, [fetchPlanets]);

  // Filter and sort the planets based on the search term and sorting order
  const filteredPlanets = planets
    .filter((planet) =>
      planet.englishName.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) =>
      sortAsc
        ? a.englishName.localeCompare(b.englishName)
        : b.englishName.localeCompare(a.englishName)
    );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <View style={styles.container}>
        <EmptyState
          animation={errorAnimation}
          message="An error occurred while fetching planets. Please try again later."
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <InputWithIcon term={searchTerm} setTerm={setSearchTerm} />
      {filteredPlanets.length === 0 ? (
        <EmptyState message="No results found. Try searching for something else." />
      ) : (
        <FlatList
          data={filteredPlanets}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <PlanetCard planet={item} />}
          refreshing={refreshing}
          onRefresh={fetchPlanets}
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

export default Planets;
