import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="register" 
      
      options={{ title: "Create Account", headerLeft: () => <></>,headerShown: true }}
      />
      <Stack.Screen name="login" />
      <Stack.Screen name="splash" />
      <Stack.Screen
        name="choosetype"
        options={{ headerTitle: "Choose your type ", headerShown: true }}
      />
    </Stack>
  );
}
