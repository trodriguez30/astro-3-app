import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { useFavorites } from "@/hooks/useFavorites";
import { Planet } from "@/types/planetTypes";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Loading from "@/components/Loading";
import EmptyState from "@/components/EmptyState";
import errorAnimation from "@/assets/animations/error.json";
import CustomTitle from "@/components/CustomTitle";
import IconButton from "@/components/IconButton";
import LottieView from "lottie-react-native";
import astroAnimation from "@/assets/animations/astronaut.json";
import DetailRow from "@/components/DetailRow";
import { COLORS, SIZES } from "@/styles/theme";

const PlanetDetails = () => {
  const insets = useSafeAreaInsets();
  const router = useRouter();
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
        setPlanetDetails(data);
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

  const renderContent = () => {
    if (error) {
      return (
        <EmptyState
          animation={errorAnimation}
          message="An error occurred while fetching planet details. Please try again."
        />
      );
    }

    if (!planetDetails) {
      return (
        <EmptyState message="Planet details not available. Please try again later." />
      );
    }

    return (
      <View style={styles.content}>
        <CustomTitle
          primaryText={planetDetails.englishName}
          secondaryText={`(${planetDetails.name})`}
          size="large"
        />
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <LottieView
            source={astroAnimation}
            autoPlay
            loop
            style={styles.animation}
          />
        </View>
        <View>
          <DetailRow label="Adjectives" value="Martian" />
          <DetailRow
            label="Aphelion"
            value={`${planetDetails.aphelion?.toLocaleString()} km²`}
          />
          <DetailRow
            label="Eccentricity"
            value={planetDetails.eccentricity?.toFixed(4)}
          />
          <DetailRow
            label="Inclination"
            value={`${planetDetails.inclination}° to ecliptic`}
          />
          <DetailRow
            label="Longitude"
            value={`${planetDetails.longAscNode}°`}
          />
        </View>

        <IconButton
          title={isFavorite ? "Remove from Favorites" : "Add to Favorites"}
          onPress={() => toggleFavorite(planetDetails)}
          size={30}
          backgroundColor={COLORS.secondary}
          color="#fff"
          iconName={isFavorite ? "heart" : "heart-o"}
        />
      </View>
    );
  };

  return (
    <View
      style={[
        styles.container,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <IconButton
          iconName="arrow-left"
          backgroundColor={COLORS.background}
          onPress={() => router.back()}
          size={30}
        />
      </View>
      { renderContent() } {/* Render either loading, error, or planet details content */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    flex: 1,
    paddingHorizontal: SIZES.extra,
  },
  animation: {
    width: 200,
    height: 200,
  },
  favoriteButton: {
    alignSelf: "center",
    marginBottom: 30,
  },
});

export default PlanetDetails;
