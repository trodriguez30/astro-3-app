import React from "react";
import { View, Text, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import emptyAnimation from "@/assets/animations/empty.json"
import { COLORS, FONTS, SIZES } from "@/styles/theme";

interface EmptyStateProps {
  message: string;
  animation?: any;
}

const EmptyState= ({ message, animation }: EmptyStateProps) => {
  return (
    <View style={styles.container}>
      <LottieView
        source={animation || emptyAnimation}
        autoPlay
        loop
        style={styles.animation}
      />
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: SIZES.large,
  },
  animation: {
    width: 200,
    height: 200,
  },
  message: {
    marginTop: SIZES.extra,
    fontSize: SIZES.fontSmall,
    textAlign: "center",
    fontFamily: FONTS.oswaldMedium,
    color: COLORS.secondary,
  },
});

export default EmptyState;
