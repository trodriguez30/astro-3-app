import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from "react-native";
import { Planet } from "@/types/planetTypes";
import PlanetCard from "@/components/PlanetCard";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import InputWithIcon from "@/components/InputWithIcon";
import IconButton from "@/components/IconButton";

const Planets = () => {
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortAsc, setSortAsc] = useState(true);
  const insets = useSafeAreaInsets();

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
    <View style={{ ...styles.container, paddingTop: insets.top }}>
      <StatusBar style="light" />
      <View style={{ flexDirection: "row" }}>
      <Text style={styles.title}>
        Let's <Text style={styles.highlight}>Explore</Text>
      </Text>
        <IconButton
          iconName={sortAsc ? "sort-alpha-desc" : "sort-alpha-asc"}
          onPress={() => setSortAsc(!sortAsc)}
          size={25}
        />
      </View>
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
    padding: 16,
    backgroundColor: "#0B0F2F",
  },
  title: {
    flex: 1,
    color: "#E0E6F8",
    fontSize: 50,
    fontFamily: "OswaldBold",
  },
  highlight: {
    color: "#FFD700",
  }
});

export default Planets;
