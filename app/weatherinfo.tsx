import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import React, { useState } from "react";
import axios from 'axios';

const WeatherInfo = () => {
  const { latitude, longitude, year, month, day , hour } = useLocalSearchParams();
  const [ yearlyT2M, setYearlyT2M ] = useState<{id: number, t2mval: number}[]>([]);

  function parsetime(yeardifference: number){
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

    // bug: there isn't info until 3 days into the past, so if they put today's date, or yesterday's, the first value will implode. should fix it
    // TODO: get a bunch of those values and put them in an array
    // TODO: sleep

    let diffToBeginSearch = Number(year) - Number(currentdate.getFullYear())
    const newYearlyData: {id: number, t2mval: number}[] = [];

    for (let i = 0; i < 3; i++) { // i is the number of calls to the api

      let time = parsetime(diffToBeginSearch + i)

      let hourstring = ''

      if (Number(hour) - 10 < 0) {
        hourstring = '0' + hour.toString()
      } else {
        hourstring = hour.toString()
      }

      console.log("Current Time being searched: " + time)

      let link = 'https://power.larc.nasa.gov/api/temporal/hourly/point?start=' + time + '&end=' + time + '&latitude=36.69899362589028&longitude=-4.439089563723052&community=ag&parameters=T2M&format=json&units=metric&user=IntelTank&header=true'

      // console.log(link)

      try {
        const response = await axios.get(link);
        let parsedResponse = JSON.parse(response.request.response);
        let t2mValues = parsedResponse.properties.parameter.T2M;

        const newEntry = {
          id: Number(year) - diffToBeginSearch - i,
          t2mval: t2mValues[time.toString() + hourstring.toString()]
        };

        newYearlyData.push(newEntry);

        updatechart(newYearlyData)


      } catch (error) {
        console.error(error)
      }

    }

    // Update state once with all collected data
    setYearlyT2M(newYearlyData);
    console.log("Final yearly data:", newYearlyData);

  }

  React.useEffect(() => {
      getinfo();
  }, []);

  function updatechart(values: {id: number, t2mval: number}){
    console.log(values)
  }

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
