import { View, Text, StyleSheet } from 'react-native';

const WeatherInfo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Information</Text>
      <View>
        <Text style={styles.text2}>Latitude:</Text>
        <Text style={styles.text2}>Longitude:</Text>
        <Text style={styles.text2}>Max. Temperature:</Text>
        <Text style={styles.text2}>Min. Temperature:</Text>
        <Text style={styles.text2}>Humidity:</Text>
        <Text style={styles.text2}>Wind Speed:</Text>
        <Text style={styles.text2}>Rain Probability:</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    textAlign: 'center',
    color: '#000',
    marginTop: 10,
    margin: 20,
  },
  text2: {
    fontSize: 18,
    fontFamily: 'Poppins',
    textAlign: 'left',
    color: '#000',
    marginLeft: 10,
    marginTop: 5,
  },
});

export default WeatherInfo
