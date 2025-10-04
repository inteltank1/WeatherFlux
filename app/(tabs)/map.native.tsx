import React from "react";
import MapView, { Overlay, Callout, Marker } from "react-native-maps";
import { View, Text, StyleSheet } from "react-native";

export default function Map() {
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
          <Text>Render circles, polygons, and polylines</Text>
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
