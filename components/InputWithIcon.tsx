import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

interface InputWithIconProps {
  term: string;
  setTerm: (value: string) => void;
}

const InputWithIcon = ({ term, setTerm }: InputWithIconProps) => {
  return (
    <View style={styles.inputContainer}>
      <FontAwesome name="search" size={20} color="#7A84C1" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Buscar planeta"
        value={term}
        placeholderTextColor={"#7A84C1"}
        onChangeText={setTerm}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    height: 40,
    backgroundColor: "#1E2156",
    borderRadius: 10,
    marginVertical: 10,
    paddingHorizontal: 8,
    alignItems: "center"
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    fontFamily: "OswaldRegular",
    fontSize: 16,
    color: "#fff",
  },
});

export default InputWithIcon;
