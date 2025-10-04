import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Rocketcard from '../../components/rockets/card'

export default function rocket() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Rocket</Text>
      <Rocketcard
      missionName="Starlink Group 11-17"
      rocketName="Falcon 9 Block 5 | SpaceX"
      location="Vandenberg SFB, California, USA"
      date="Wednesday"
      time="03:00"
      countdown="4 days, 1 hour"
      imageUrl="https://picsum.photos/400/200"
      landingType="OCISLY"
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
