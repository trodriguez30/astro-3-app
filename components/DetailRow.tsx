import { COLORS, FONTS, SIZES } from "@/styles/theme";
import { StyleSheet, Text, View } from "react-native";

interface DetailRowProps {
  label: string;
  value: string | undefined;
}

export default function DetailRow({ label, value }: DetailRowProps) {
  return (
    <View style={styles.detailRow}>
      <Text style={styles.detailLabel}>{label}</Text>
      <Text style={styles.detailValue}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: SIZES.small,
    borderTopColor: COLORS.text,
    borderTopWidth: 1,
    paddingVertical: SIZES.medium,
  },
  detailLabel: {
    fontSize: SIZES.fontSmall,
    fontFamily: FONTS.oswaldMedium,
    color: "#FFD700",
  },
  detailValue: {
    color: COLORS.text,
    fontSize: SIZES.fontSmall,
    fontFamily: FONTS.oswaldRegular,
  },
});
