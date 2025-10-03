import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
// import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { FontAwesome6 } from "@react-native-vector-icons/fontawesome6"
import { Octicons } from "@react-native-vector-icons/octicons"

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarShowLabel: false,
        tabBarLabelPosition: 'beside-icon',
        tabBarLabelStyle: { fontSize: 1 },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Launches',
          tabBarIcon: ({ color }) => <Octicons name="rocket" size={28} color={color}/>,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <FontAwesome6 name="map" size={28} color={color} iconStyle="solid" />,
        }}
      />
    </Tabs>
  );
}

//
