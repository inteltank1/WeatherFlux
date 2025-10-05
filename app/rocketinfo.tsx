import { View, Text, Pressable, StyleSheet, Image, ScrollView } from 'react-native';
import { useRouter, useLocalSearchParams } from "expo-router";




export default function Index() {
  const router = useRouter();
  return(
    <ScrollView><View>
      <Image style={{ width: 'auto', height: 150 }} source={{ uri: "https://www.teslarati.com/wp-content/uploads/2019/03/SLS-Block-1-in-flight-NASA-crop-scaled.jpg"}} />
      <Text style={styles.missionName}>Artemis II</Text>
      <Text style={styles.text}>Rocket: </Text><Text style={styles.text4}>SLS Block 1</Text>
      <Text style={styles.text}>Launch Date: </Text><Text style={styles.text4}>06/02/2026 at 02:09 CEST</Text>
      <Text style={styles.text}>Launch Site: </Text><Text style={styles.text4}>LC-39B, Kennedy Space Center</Text>
      <Text style={styles.text}>Latitude: </Text><Text style={styles.text4}>28.6265</Text>
      <Text style={styles.text}>Longitude: </Text><Text style={styles.text4}>-80.6208</Text>
      <Pressable style={styles.Button} onPress={() => router.navigate({
          pathname: "/weatherinfo",
          params: { latitude: 28.6265, longitude: -80.6208, year: 2026, month: 2, day: 6, hour: 2}
        })}>
        <Text style={styles.buttonText}>Weather</Text>
      </Pressable>
    </View></ScrollView>
  )
}

const styles = StyleSheet.create({
  missionName: {
    fontSize: 45,
    fontWeight: 'bold',
    margin: 10,
    fontFamily: 'Poppins',
    textDecorationLine: 'underline',
    marginTop: 30,
    marginBottom: 20,
    textAlign: 'center'
  },
  text4: {
    fontSize: 20,
    marginLeft: 20,
    margin: 5,
    textAlign: 'left',
    fontFamily: 'Poppins',
  },
  text: {
    fontSize: 24,
    marginLeft: 10,
    margin: 5,
    fontWeight: 'bold',
    textAlign: 'left',
    fontFamily: 'Poppins',
  },
  Button: {
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: '#3585C4',
    borderRadius: 15,
    margin: 20,
    padding: 10,
    borderWidth: 3,
    borderColor: '#0D3052',
    borderStyle: 'solid',
  },
  buttonText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#E4ECF2',
    textAlign: 'center',
    fontFamily: 'Poppins',
  },
});
