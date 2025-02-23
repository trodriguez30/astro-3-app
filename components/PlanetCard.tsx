import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { Planet } from "@/types/planetTypes";
import InfoRow from "./InfoRow";
import CustomTitle from "./CustomTitle";

const PlanetCard = ({ planet }: { planet: Planet }) => {
  const { name, englishName, gravity, meanRadius, avgTemp } = planet;
  const router = useRouter();

  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={() => router.push(`/planetDetails?id=${planet.id}`)}
    >
      <CustomTitle primaryText={englishName} secondaryText={`(${name})`} size="medium"/>

      <InfoRow iconName="temperature-high" label={`Temperatura: ${avgTemp} K`} />
      <InfoRow iconName="weight" label={`Gravedad: ${gravity} m/s²`} />
      <InfoRow iconName="globe" label={`Radio Medio: ${meanRadius} km`} />

    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#1E2156",
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
  },
});

export default PlanetCard;
