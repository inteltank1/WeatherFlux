import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{headerShown: false, headerTitle: "Main"}} />
      <Stack.Screen name="rocketinfo" options={{headerTitle: "Rocket Info"}} />
      <Stack.Screen name="weatherinfo" options={{headerTitle: "Weather Info"}}/>
    </Stack>
  )
}
