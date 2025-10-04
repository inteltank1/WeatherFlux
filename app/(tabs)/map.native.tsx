import React, {useState} from "react";
import MapView, { Marker } from "react-native-maps";
import { View, Text, SafeAreaView, Button, StyleSheet } from "react-native";
import { DateTimePickerAndroid, DateTimePickerEvent } from '@react-native-community/datetimepicker';


export default function Map() {
  const [date, setDate] = useState(new Date(1598051730000));

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
  return (

    <View style={styles.container}>

      <MapView
        style={{ flex: 1, ...StyleSheet.absoluteFillObject }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >

        <Marker
          coordinate={{latitude: 37.78825, longitude: -122.4324}}
          title="This is a native view"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
        />

      </MapView>

      <View style={styles.buttonContainer}>
        <View style={styles.bubble}>
          <SafeAreaView>
                <Button onPress={showDatepicker} title="Show date picker!" />
                <Button onPress={showTimepicker} title="Show time picker!" />
                <Text>selected: {date.toLocaleString()}</Text>
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
  bubble: {
    flex: 1,
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
