import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { Planet } from "@/types/planetTypes";
import PlanetCard from "@/components/PlanetCard";
import InputWithIcon from "@/components/InputWithIcon";
import { useSort } from "@/hooks/useSort";

const Planets = () => {
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { sortAsc } = useSort();

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const response = await fetch(
          "https://api.le-systeme-solaire.net/rest/bodies/"
        );
        if (!response.ok) {
          throw new Error(`Error en la solicitud: ${response.status}`);
        }

        const data = await response.json();
        const filteredPlanets = data.bodies.filter(
          (body: Planet) => body.isPlanet
        );

        setPlanets(filteredPlanets);
      } catch (error) {
        console.error("Error al obtener los planetas:", error);
      }
    };

    fetchPlanets();
  }, []);

  const filteredPlanets = planets
    .filter((planet) =>
      planet.englishName.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) =>
      sortAsc
        ? a.englishName.localeCompare(b.englishName)
        : b.englishName.localeCompare(a.englishName)
    );

  return (
    <View style={styles.container}>
      <InputWithIcon term={searchTerm} setTerm={setSearchTerm} />
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
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Planets;
