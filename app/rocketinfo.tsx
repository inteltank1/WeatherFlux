import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useRouter } from "expo-router";




export default function Index() {
  const router = useRouter();
  return(

    <View>
      <Text style={styles.missionName}>Starlink Group 10-86</Text>
      <Text style={styles.text}>Launch Date: 2023-01-01</Text>
      <Pressable style={styles.Button} onPress={() => router.navigate('./weatherinfo')}>
        <Text style={styles.buttonText}>Weather Information</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  missionName: {
    fontSize: 35,
    fontWeight: 'bold',
    margin: 10,
    marginTop: 30,
    marginBottom: 20,
    textAlign: 'center'
  },
  text: {
    fontSize: 24,
    margin: 10,
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
