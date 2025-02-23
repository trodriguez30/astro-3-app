import { Text, StyleSheet } from "react-native";

interface CustomTitleProps {
  primaryText: string;
  secondaryText?: string;
  size?: "small" | "medium" | "large";
}

const fontSizes = {
  small: 16,
  medium: 24,
  large: 46,
};

const CustomTitle = ({
  primaryText,
  secondaryText,
  size = "medium",
}: CustomTitleProps) => {
  return (
    <Text
      style={[styles.title, { fontSize: fontSizes[size] }]}
    >
      {primaryText}
      {secondaryText && (
        <Text style={styles.secondaryText}> {secondaryText}</Text>
      )}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    flex: 1,
    fontFamily: "OswaldBold",
    color: "#E0E6F8",
    marginBottom: fontSizes.small,
  },
  secondaryText: {
    color: "#FFD700",
  },
});

export default CustomTitle;
