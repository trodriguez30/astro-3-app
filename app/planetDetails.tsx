import { View, Text, StyleSheet } from 'react-native';

const planetDetails = () =>  {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Planet Details</Text>
      </View>
    );
  }
  
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
});

export default planetDetails;