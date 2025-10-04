import React from "react";
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";


// Part of the Card is generated using AI, as it has been heavily modified by humans.
const LaunchCard = ({
  missionName,
  rocketName,
  location,
  date,
  time,
  countdown,
  imageUrl,
}) => {

  const router = useRouter()

  return (
    <View style={styles.card}>

      <TouchableOpacity onPress={() => router.navigate('/rocketinfo')}>
        <Image
          style={styles.image}
          source={{
            uri: "https://picsum.photos/400/200"  // guaranteed working remote placeholder
          }}

          />

          <View style={styles.details}>

            {/* Mission Name */}
            <Text style={styles.title}>{missionName}</Text>

            {/* Rocket */}
            <Text style={styles.subtitle}>
              <MaterialCommunityIcons name="rocket" size={14} /> {rocketName}
            </Text>

            {/* Location */}
            <Text style={styles.subtitle}>
              <MaterialCommunityIcons name="map-marker" size={14} /> {location}
            </Text>

            {/* Date + Time */}
            <Text style={styles.subtitle}>
              <MaterialCommunityIcons name="clock" size={14} /> {date}, {time}
            </Text>

            {/* Countdown */}
            <Text style={styles.countdown}>{countdown}</Text>
          </View>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1c1c1e",
    borderRadius: 12,
    overflow: "hidden",
    margin: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 5,
  },
  image: {
    width: 'auto',
    height: 180,
    backgroundColor: "#000", // fallback background in case of slow load
  },
  details: {
    padding: 12,
  },
  landingBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2c2c2e",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    alignSelf: "flex-start",
    marginBottom: 6,
  },
  landingText: {
    color: "#fff",
    fontSize: 12,
    marginLeft: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: "#ccc",
    marginVertical: 2,
  },
  countdown: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "600",
    color: "#bbb",
  },
});

export default LaunchCard;
