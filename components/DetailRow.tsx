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
    marginVertical: 5,
    borderTopColor: "#fff",
    borderTopWidth: 1,
    paddingVertical: 10,
  },
  detailLabel: {
    fontSize: 18,
    fontFamily: "OswaldMedium",
    color: "#FFD700",
  },
  detailValue: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "OswaldRegular",
  },
});
