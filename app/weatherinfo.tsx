import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import React, { useState } from "react";
import axios from 'axios';
import { BarChart } from "react-native-gifted-charts"

const WeatherInfo = () => {
  const { latitude, longitude, year, month, day , hour } = useLocalSearchParams();
  const [ yearlyT2M, setYearlyT2M ] = useState<{id: number, t2mval: number, precval: number, uvaval: number}[]>([]);
  const [ probTemp, setProbTemp ] = useState('Loading...')
  const [ probRain, setProbRain ] = useState('Loading...')
  const [ probUV, setProbUV] = useState('Loading...')

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

    let diffToBeginSearch = Number(year) - Number(currentdate.getFullYear())
    const newYearlyData: {id: number, t2mval: number, precval: number, uvaval: number}[] = [];

    for (let i = 0; i < 5; i++) { // i is the number of calls to the api

      let time = parsetime(diffToBeginSearch + i)

      let hourstring = ''

      if (Number(hour) - 10 < 0) {
        hourstring = '0' + hour.toString()
      } else {
        hourstring = hour.toString()
      }

      console.log("Current Time being searched: " + time)

      let link = 'https://power.larc.nasa.gov/api/temporal/hourly/point?start=' + time + '&end=' + time + '&latitude='+latitude+'&longitude='+longitude+'&community=ag&parameters=T2M%2CPRECTOTCORR%2CALLSKY_SFC_UVA&format=json&units=metric&user=IntelTank&header=true'

      // console.log(link)

      try {
        const response = await axios.get(link);
        let parsedResponse = JSON.parse(response.request.response);
        let t2mValues = parsedResponse.properties.parameter.T2M;
        let precValues = parsedResponse.properties.parameter.PRECTOTCORR;
        let uvaValues = parsedResponse.properties.parameter.ALLSKY_SFC_UVA;

        let currenttimeandhour = time.toString() + hourstring.toString()

        const newEntry = {
          id: Number(year) - diffToBeginSearch - i,
          t2mval: t2mValues[currenttimeandhour],
          precval: precValues[currenttimeandhour],
          uvaval: uvaValues[currenttimeandhour]

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

  const mean = (arr, key) => {
    const valid = arr.map(item => item[key]).filter(v => v !== undefined && v !== null && v !== -999);
    return valid.reduce((sum, val) => sum + val, 0) / valid.length;
  }

  function updatechart(values: {id: number, t2mval: number, precval: number, uvaval: number}){
    console.log(values)
    console.log("value: "+ values[values.length-1].t2mval)

    let meanT2M = mean(values, 't2mval')
    let meanPrec = mean(values, 'precval')
    let meanUVA = mean(values, 'uvaval')

    setProbTemp(meanT2M.toFixed(3))
    setProbRain(meanPrec.toFixed(3))
    setProbUV(meanUVA.toFixed(3))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Entered Information</Text>
      <View style={{marginBottom: 50,}}>
        <Text style={styles.text2}>Latitude:</Text> <Text style={styles.text3}>{latitude}</Text>
        <Text style={styles.text2}>Longitude:</Text> <Text style={styles.text3}>{longitude}</Text>
        <Text style={styles.text2}>Time:</Text><Text style={styles.text3}>{year}-{month}-{day}, hour: {hour}</Text>
      </View>
      <Text style={styles.text}>Weather information:</Text>
      <View>
        <Text style={styles.text2}>Temperature Probability:</Text><Text style={styles.text3}>{probTemp} Cº</Text>
        <Text style={styles.text2}>Probability of rain:</Text><Text style={styles.text3}>{probRain} mm/hour</Text>
        <Text style={styles.text2}>Probable UV Rays:</Text><Text style={styles.text3}>{probUV} MJ/hour</Text>
      </View>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 40,
    textDecorationLine: 'underline',
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
    fontWeight: 'bold',
    marginTop: 5,
  },
  text3: {
    fontSize: 18,
    fontFamily: 'Poppins',
    textAlign: 'left',
    color: '#000',
    marginLeft: 20,
    marginTop: 5,
  },
});

export default WeatherInfo
