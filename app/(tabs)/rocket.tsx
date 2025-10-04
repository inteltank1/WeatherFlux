import React from "react";
import {useLocalSearchParams} from 'expo-router';
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Rocketcard from '../../components/rockets/card'

export default function rocket() {
  return (
    <View style={styles.container}>

      <ScrollView style={styles.scrollview}>

        <View style={styles.containerinsidescroll}>

      <Text style={styles.text}>Launches</Text>

      <Rocketcard
        rocketName="Falcon 9 Block 5 | SpaceX"
        missionName="Starlink Group 10-59"
        location="Cape Canaveral SFS, Florida, USA"
        date="Tuesday"
        time="06:10"
        imageUrl="https://storage.googleapis.com/nextspaceflight/media/rockets/Falcon_9_Block_5.webp"
      />

      <Rocketcard
        missionName="Starlink Group 11-17"
        rocketName="Falcon 9 Block 5 | SpaceX"
        location="Vandenberg SFB, California, USA"
        date="Wednesday"
        time="03:00"
        imageUrl="https://storage.googleapis.com/nextspaceflight/media/rockets/Falcon_9_Block_5.webp"
      />

      <Rocketcard
        missionName="NS-36"
        rocketName="New Shepard | Blue Origin"
        location="West Texas, Texas, USA"
        date="Wednesday"
        time="14:30"
        imageUrl="https://storage.googleapis.com/nextspaceflight/media/rockets/New_Shepard_2.webp"
      />

      <Rocketcard
        missionName="Project Kuiper (KF-03)"
        rocketName="Falcon 9 Block 5 | SpaceX"
        location="Cape Canaveral SFS, Florida, USA"
        date="Friday"
        time="03:34"
        imageUrl="https://storage.googleapis.com/nextspaceflight/media/rockets/Falcon_9_Block_5.webp"
      />
      <Rocketcard
        missionName="Unknown Payload"
        rocketName="Long March 8A | CASC"
        location="Wanchang Space Launch Site, China"
        date="Friday"
        time="05:19"
        imageUrl="https://storage.googleapis.com/nextspaceflight/media/rockets/CZ-8A.webp"
      />
      <Rocketcard
        missionName="Starlink Group 10-52"
        rocketName="Falcon 9 Block 5 | SpaceX"
        location="Cape Canaveral SFS, Florida, USA"
        date="October 12"
        time="10:11"
        imageUrl="https://storage.googleapis.com/nextspaceflight/media/rockets/Falcon_9_Block_5.webp"
      />
      <Rocketcard
        missionName="Artemis II"
        rocketName="SLS Block 1 | NASA"
        location="Kennedy Space Center, Florida, USA"
        date="February 6, 2026"
        time="02:09"
        imageUrl="https://storage.googleapis.com/nextspaceflight/media/rockets/SLS_Block_1.webp"
      />

        </View>

      </ScrollView>
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
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
    marginVertical: 7
  },
  scrollview: {
    width: '100%',
  },
  containerinsidescroll: {
    paddingRight: '15%',
    paddingLeft: '15%',
  }
});
