import React, {useState} from "react";
import MapView, { Marker } from "react-native-maps";
import { View, Text, SafeAreaView, Pressable, StyleSheet, Platform } from "react-native";
import RNDateTimePicker, { DateTimePickerAndroid, DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { useRouter } from "expo-router";


export default function Map() {
  const now = Date.now();
  const notnow = now + 259200000;
  const [date, setDate] = useState(new Date(notnow));
  const [selectedDateString, setSelectedDateString] = useState('20070401')
  const [selectedHourString, setSelectedHourString] = useState('00')

  const router = useRouter();

    const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
      const currentDate = selectedDate || date;
      setDate(currentDate);

      let thedate = ''
      let thehour = ''

      let day = currentDate.getDate()
      let month = (currentDate.getMonth() + 1)
      let year = currentDate.getFullYear();
      let hour = currentDate.getHours();

      thedate = year.toString()

      if (month - 10 < 0) {
        thedate = thedate + '0' + month.toString()
      } else {
        thedate = thedate + month.toString()
      }

      if (day - 10 < 0){
        thedate = thedate + '0' + day.toString()
      } else {
        thedate = thedate + day.toString()
      }

      setSelectedDateString(thedate)
      setSelectedHourString(thehour)

    };

    const showDatepicker = () => {
      DateTimePickerAndroid.open({
        value: date,
        onChange,
        mode: 'date',
        is24Hour: true,
      });
    };

    const showTimepicker = () => {
      DateTimePickerAndroid.open({
        value: date,
        onChange,
        mode: 'time',
        is24Hour: true,
      });
    };

  const [latitude, changelatitude] = useState(36.69899362589028);
  const [longitude, changelongitude] = useState(-4.439089563723052);

  function changelongandlat(region: any) {

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
            {Platform.OS === 'android' ? (
              <>
                <Pressable style={styles.safeview} onPress={showDatepicker}><Text style={styles.btnText}>Date Picker</Text></Pressable>
                <Pressable style={styles.safeview} onPress={showTimepicker}><Text style={styles.btnText}>Time Picker</Text></Pressable>
              </>
            ) : (
              <View style={styles.iosPickerRow}>
                <RNDateTimePicker
                  value={date}
                  mode="date"
                  display="compact"
                  onChange={onChange}
                  style={styles.iosDatePicker}
                />
                <RNDateTimePicker
                  value={date}
                  mode="time"
                  display="compact"
                  onChange={onChange}
                  style={styles.iosDatePicker}
                />
              </View>
            )}

            <Pressable style={styles.safeview2} onPress={() => router.navigate({
                pathname: "/weatherinfo",
                params: { latitude: latitude, longitude: longitude, year: Number(date.getFullYear()), month: Number(date.getMonth()), day: Number(date.getDate()), hour: date.getHours()}
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
    fontSize: 17,
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
  iosDatePicker: {
    flex: 1,
    marginHorizontal: 15,
    minHeight: 50,
    minWidth: 120,
    transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
  },
  iosPickerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
    paddingHorizontal: 10,
  },
})
