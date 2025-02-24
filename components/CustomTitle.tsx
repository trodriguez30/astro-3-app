import { COLORS, FONTS, SIZES } from "@/styles/theme";
import { Text, StyleSheet } from "react-native";

interface CustomTitleProps {
  primaryText: string;
  secondaryText?: string;
  size?: "small" | "medium" | "large";
}

const fontSizes = {
  small: SIZES.fontSmall,
  medium: SIZES.fontMedium,
  large: SIZES.fontLarge,
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
    fontFamily: FONTS.oswaldBold,
    color: COLORS.text,
    marginBottom: fontSizes.small,
  },
  secondaryText: {
    color: COLORS.accent,
  },
});

export default CustomTitle;
