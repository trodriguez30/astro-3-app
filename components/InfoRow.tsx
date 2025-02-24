import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { COLORS, FONTS, SIZES } from '@/styles/theme';

interface InfoRowProps {
  iconName: string;
  label: string;
}

const InfoRow = ({ iconName, label }: InfoRowProps) => (
  <View style={styles.infoRow}>
    <FontAwesome5 name={iconName} size={20} color={COLORS.accent} />
    <Text style={styles.detail}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: SIZES.medium,
  },
  detail: {
    fontSize: SIZES.fontSmall,
    color: COLORS.secondary,
    marginLeft: SIZES.medium,
    fontFamily: FONTS.oswaldRegular
  },
});

export default InfoRow;
