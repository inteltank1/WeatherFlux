import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import React, { useState } from "react";
import axios from 'axios';

const WeatherInfo = () => {
  const { latitude, longitude, year, month, day , hour } = useLocalSearchParams();

  function parsetime(yeardifference: Number){

    let time = ''

    time = (Number(year) - Number(yeardifference)).toString();

    if (Number(month) - 10 < 0) {
      time = time + '0' + month.toString()
    } else {
      time = time + month.toString()
    }

    if (Number(day) - 10 < 0){
      time = time + '0' + day.toString()
    } else {
      time = time + day.toString()
    }

    return time

  }

  async function getinfo(){

    let currentdate = new Date()

    // TODO: make sure that the day NOR the month NOR the year can exceed the currentdate (-3 days)
    // TODO: get a bunch of those values and put them in an array
    // TODO: sleep

    console.log(currentdate)

    let time = parsetime(0)
    let hourstring = ''

    if (Number(hour) - 10 < 0) {
      hourstring = '0' + hour.toString()
    } else {
      hourstring = hour.toString()
    }

    console.log(time)

    let link = 'https://power.larc.nasa.gov/api/temporal/hourly/point?start=' + time + '&end=' + time + '&latitude=36.69899362589028&longitude=-4.439089563723052&community=ag&parameters=T2M&format=json&units=metric&user=IntelTank&header=true'

    console.log(link)

    try {
      await axios.get(link).then(function (response) {
        let parsedResponse = JSON.parse(response.request.response)
        let t2mValues = parsedResponse.properties.parameter.T2M

        console.log(parsedResponse.properties.parameter.T2M[time.toString() + hourstring.toString()])
        console.log(parsedResponse.properties.parameter.T2M)

        let temps = Object.values(t2mValues);

        let meanT2M = temps.reduce((sum, val) => sum + val, 0) / temps.length;

        console.log(meanT2M)



      })
    } catch (error){
      console.error(error)
    }

  }

  React.useEffect(() => {
      getinfo();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Information</Text>
      <View>
        <Text style={styles.text2}>Latitude: {latitude}</Text>
        <Text style={styles.text2}>Longitude: {longitude}</Text>
        <Text style={styles.text2}>Max. Temperature:</Text>
        <Text style={styles.text2}>Min. Temperature:</Text>
        <Text style={styles.text2}>Humidity:</Text>
        <Text style={styles.text2}>Wind Speed:</Text>
        <Text style={styles.text2}>Rain Probability:</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    textAlign: 'center',
    color: '#000',
    marginTop: 10,
    margin: 20,
  },
  text2: {
    fontSize: 18,
    fontFamily: 'Poppins',
    textAlign: 'left',
    color: '#000',
    marginLeft: 10,
    marginTop: 5,
  },
});

export default WeatherInfo
