import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

interface IconButtonProps {
  onPress: () => void;
  size: number;
  iconName: keyof typeof FontAwesome.glyphMap;
  title?: string;
  backgroundColor?: string;
  color?: string;
}

const IconButton= ({ onPress, iconName, title, size, backgroundColor = "#C4A35A", color = "#2F365F" }: IconButtonProps) => {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor }]} onPress={onPress}>
        <FontAwesome name={iconName} size={size} color={color} style={title ? styles.icon : {}} />
        {title && <Text style={styles.text}>{title}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 8,
    marginVertical: 10,
  },
  icon: {
    marginRight: 8,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default IconButton;