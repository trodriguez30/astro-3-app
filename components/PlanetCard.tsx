import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { Planet } from "@/types/planetTypes";
import InfoRow from "./InfoRow";
import CustomTitle from "./CustomTitle";
import { COLORS, SIZES } from "@/styles/theme";

const PlanetCard = ({ planet }: { planet: Planet }) => {
  const { name, englishName, gravity, avgTemp } = planet;
  const router = useRouter();

  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={() => router.push(`/planetDetails?id=${planet.id}`)}
    >
      <CustomTitle primaryText={englishName} secondaryText={`(${name})`} size="medium"/>

      <InfoRow iconName="temperature-high" label={`Temperatura: ${avgTemp} K`} />
      <InfoRow iconName="weight" label={`Gravedad: ${gravity} m/s²`} />

    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: COLORS.blueLight,
    padding: SIZES.extra,
    marginVertical: SIZES.small,
    borderRadius: SIZES.small,
  },
});

export default PlanetCard;
