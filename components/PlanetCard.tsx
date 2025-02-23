import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { Planet } from "@/types/planetTypes";
import InfoRow from "./InfoRow";

const PlanetCard = ({ planet }: { planet: Planet }) => {
  const { name, englishName, gravity, meanRadius, avgTemp } = planet;
  const router = useRouter();

  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#1E2156",
        padding: 16,
        marginVertical: 8,
        borderRadius: 8,
      }}
      onPress={() => router.push(`/planetDetails?id=${planet.id}`)}
    >
      <Text style={styles.title}>
        {englishName} <Text style={styles.name}>({name})</Text>
      </Text>

      <InfoRow iconName="temperature-high" label={`Temperatura: ${avgTemp} K`} />
      <InfoRow iconName="weight" label={`Gravedad: ${gravity} m/s²`} />
      <InfoRow iconName="globe" label={`Radio Medio: ${meanRadius} km`} />

    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2F365F",
    padding: 20,
    borderRadius: 12,
    margin: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: "OswaldBold",
    color: "#E0E6F8",
    marginBottom: 16,
  },
  name: {
    fontSize: 18,
    color: "#FFD700",
  },
});

export default PlanetCard;
