import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { COLORS, FONTS, SIZES } from "@/styles/theme";

interface InputWithIconProps {
  term: string;
  setTerm: (value: string) => void;
}

const InputWithIcon = ({ term, setTerm }: InputWithIconProps) => {
  return (
    <View style={styles.inputContainer}>
      <FontAwesome name="search" size={20} color={COLORS.secondary} style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Buscar planeta"
        value={term}
        placeholderTextColor={COLORS.secondary}
        onChangeText={setTerm}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    height: 40,
    backgroundColor: COLORS.blueLight,
    borderRadius: SIZES.medium,
    marginVertical: SIZES.medium,
    paddingHorizontal: SIZES.small,
    alignItems: "center"
  },
  icon: {
    marginRight: SIZES.medium,
  },
  input: {
    flex: 1,
    height: 40,
    fontFamily: FONTS.oswaldRegular,
    fontSize: SIZES.fontSmall,
    color: "#fff",
  },
});

export default InputWithIcon;
