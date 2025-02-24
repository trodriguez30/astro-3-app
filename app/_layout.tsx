import { Stack } from "expo-router";
import { FavoritesProvider } from "@/context/FavoriteProvider";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { COLORS } from "@/styles/theme";

export const unstable_settings = {
  initialRouteName: "(tabs)",
};

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [loaded] = useFonts({
    OswaldBold: require("../assets/fonts/Oswald-Bold.ttf"),
    OswaldLight: require("../assets/fonts/Oswald-Light.ttf"),
    OswaldMedium: require("../assets/fonts/Oswald-Medium.ttf"),
    OswaldRegular: require("../assets/fonts/Oswald-Regular.ttf"),
    OswaldSemiBold: require("../assets/fonts/Oswald-SemiBold.ttf")
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <FavoritesProvider>
      <StatusBar style="light" backgroundColor={COLORS.primary} />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen
          name="planetDetails"
          options={{ title: "Detalles del Planeta" }}
        />
      </Stack>
    </FavoritesProvider>
  );
}
