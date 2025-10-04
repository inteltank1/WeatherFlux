import React from "react";
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
        imageUrl="https://picsum.photos/400/200"
      />

      <Rocketcard
        missionName="Starlink Group 11-17"
        rocketName="Falcon 9 Block 5 | SpaceX"
        location="Vandenberg SFB, California, USA"
        date="Wednesday"
        time="03:00"
        imageUrl="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fd2%2F8c%2F78%2Fd28c78ed15bb8f2b7a1f46a1a4c5553d.jpg&f=1&nofb=1&ipt=ac2d473980d41f5d3174d42b6478b3921af244f13633c81dc719688d099098c3"
        />

        <Rocketcard
          missionName="NS-36"
          rocketName="Falcon 9 Block 5 | SpaceX"
          location="Vandenberg SFB, California, USA"
          date="Wednesday"
          time="03:00"
          imageUrl="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fd2%2F8c%2F78%2Fd28c78ed15bb8f2b7a1f46a1a4c5553d.jpg&f=1&nofb=1&ipt=ac2d473980d41f5d3174d42b6478b3921af244f13633c81dc719688d099098c3"
          />

          <Rocketcard
            missionName="Starlink Group 11-17"
            rocketName="Falcon 9 Block 5 | SpaceX"
            location="Vandenberg SFB, California, USA"
            date="Wednesday"
            time="03:00"
            imageUrl="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fd2%2F8c%2F78%2Fd28c78ed15bb8f2b7a1f46a1a4c5553d.jpg&f=1&nofb=1&ipt=ac2d473980d41f5d3174d42b6478b3921af244f13633c81dc719688d099098c3"
            />
            <Rocketcard
              missionName="Starlink Group 11-17"
              rocketName="Falcon 9 Block 5 | SpaceX"
              location="Vandenberg SFB, California, USA"
              date="Wednesday"
              time="03:00"
              imageUrl="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fd2%2F8c%2F78%2Fd28c78ed15bb8f2b7a1f46a1a4c5553d.jpg&f=1&nofb=1&ipt=ac2d473980d41f5d3174d42b6478b3921af244f13633c81dc719688d099098c3"
              />
              <Rocketcard
                missionName="Starlink Group 11-17"
                rocketName="Falcon 9 Block 5 | SpaceX"
                location="Vandenberg SFB, California, USA"
                date="Wednesday"
                time="03:00"
                imageUrl="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fd2%2F8c%2F78%2Fd28c78ed15bb8f2b7a1f46a1a4c5553d.jpg&f=1&nofb=1&ipt=ac2d473980d41f5d3174d42b6478b3921af244f13633c81dc719688d099098c3"
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
    fontSize: 24,
    fontWeight: 'bold',
  },
  scrollview: {
    width: '100%',
  },
  containerinsidescroll: {
    paddingRight: '25%',
    paddingLeft: '25%',
  }
});
