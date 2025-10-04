import React, {useState} from "react";
import MapView, { Marker } from "react-native-maps";
import { View, Text, SafeAreaView, Button, Pressable, StyleSheet } from "react-native";
import { DateTimePickerAndroid, DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { useRouter } from "expo-router";


export default function Map() {
  const now = Date.now();
  const notnow = now + 259200000;
  const [date, setDate] = useState(new Date(notnow));

  const router = useRouter();

    const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
      const currentDate = selectedDate || date;
      setDate(currentDate);
    };

    const showMode = (currentMode: 'date') => {
      DateTimePickerAndroid.open({
        value: date,
        onChange,
        mode: currentMode,
        is24Hour: true,
      });
    };

    const showDatepicker = () => {
      showMode('date');
    };

    const showTimepicker = () => {
      showMode('time');
    };

  const [latitude, changelatitude] = useState(36.69899362589028);
  const [longitude, changelongitude] = useState(-4.439089563723052);

  function changelongandlat(region) {

    changelatitude(region.latitude)
    changelongitude(region.longitude)

  }



  return (

    <View style={styles.container}>

      <MapView
        style={{ flex: 1, ...StyleSheet.absoluteFillObject }}
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onRegionChange={region => changelongandlat(region)}
      >

        <Marker
          coordinate={{latitude: latitude, longitude: longitude}}
          title="Position"
        />

      </MapView>

      <View style={styles.buttonContainer}>
        <View style={styles.bubble}>
          <SafeAreaView>
            <Pressable style={styles.safeview} onPress={showDatepicker}><Text style={styles.btnText}>Show Date Picker</Text></Pressable>
            <Pressable style={styles.safeview} onPress={showTimepicker}><Text style={styles.btnText}>Show Time Picker</Text></Pressable>
            <Pressable style={styles.safeview2} onPress={() => router.navigate({
                pathname: "/weatherinfo",
                params: { latitude: latitude, longitude: longitude }
              })}><Text style={styles.btnText}>Submit</Text></Pressable>
            <Text style={styles.dateText}>{date.toLocaleString()}</Text>
            <Text style={styles.dateText}>Latitude: { latitude }, Longitude: { longitude } </Text>
          </SafeAreaView>
        </View>
      </View>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {

    justifyContent: 'flex-end',
    alignItems: 'center',
      ...StyleSheet.absoluteFillObject

  },
  btnText: {
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  },
  safeview: {
    borderRadius: 5,
    padding: 10,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#263E7A',
  },
  safeview2: {
    borderRadius: 5,
    padding: 10,
    margin: 5,
    marginHorizontal: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000521',
  },
  dateText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  bubble: {
    flex: 1,
    marginHorizontal: 10,
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
})
