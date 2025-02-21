import { View, Text, StyleSheet } from 'react-native';

const Favorites = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favoritos</Text>
    </View>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});