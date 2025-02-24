import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { COLORS, FONTS, SIZES } from "@/styles/theme";

interface IconButtonProps {
  onPress: () => void;
  size: number;
  iconName: keyof typeof FontAwesome.glyphMap;
  title?: string;
  backgroundColor?: string;
  color?: string;
}

const IconButton= ({ onPress, iconName, title, size, backgroundColor = COLORS.iconBackground, color = COLORS.iconColor }: IconButtonProps) => {
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
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    marginVertical: SIZES.medium,
  },
  icon: {
    marginRight: SIZES.small,
  },
  text: {
    color: "#fff",
    fontSize: SIZES.fontSmall,
    fontFamily: FONTS.oswaldBold,
  },
});

export default IconButton;