import { Tabs } from 'expo-router';
import React from 'react'

import { FontAwesome6 } from "@react-native-vector-icons/fontawesome6"
import { Octicons } from "@react-native-vector-icons/octicons"

export default function TabLayout(){
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarLabelPosition: 'beside-icon',
        tabBarLabelStyle: { fontSize: 1 },
      }}>
      <Tabs.Screen
        name="rocket"
        options={{
          title: 'Launches',
          tabBarIcon: ({ color }) => <Octicons name="rocket" size={28} color={color}/>,
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          title: 'Map',
          tabBarIcon: ({ color }) => <FontAwesome6 name="map" size={28} color={color} iconStyle="solid" />,
        }}
      />
    </Tabs>
  )
}
