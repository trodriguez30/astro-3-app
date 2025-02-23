import React from "react";
import { View, Text, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

interface EmptyStateProps {
  message: string;
  animation?: any;
}

const EmptyState= ({ message, animation }: EmptyStateProps) => {
  return (
    <View style={styles.container}>
      <LottieView
        source={animation || require("@/assets/animations/empty.json")}
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
    padding: 20,
  },
  animation: {
    width: 200,
    height: 200,
  },
  message: {
    marginTop: 16,
    fontSize: 18,
    textAlign: "center",
    fontFamily: "OswaldMedium",
    color: "#7A84C1",
  },
});

export default EmptyState;
