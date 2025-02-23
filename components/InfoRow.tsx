import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';

interface InfoRowProps {
  iconName: string;
  label: string;
}

const InfoRow = ({ iconName, label }: InfoRowProps) => (
  <View style={styles.infoRow}>
    <FontAwesome5 name={iconName} size={20} color="#FFD700" />
    <Text style={styles.detail}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  detail: {
    fontSize: 18,
    color: "#B0B8D1",
    marginLeft: 10,
  },
});

export default InfoRow;
