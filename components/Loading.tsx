// components/Loading.tsx
import React from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

const Loading = () => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require("@/assets/animations/loading.json")} // Asegúrate de tener un archivo de animación JSON
        autoPlay
        loop
        style={styles.animation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0B0F2F",
  },
  animation: {
    width: 150,
    height: 150,
  },
});

export default Loading;
