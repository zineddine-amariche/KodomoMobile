import { useRootNavigationState } from "expo-router";
import { useRouter, useSegments } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import {  useSelector } from "react-redux";

const Index = () => {
  const segments = useSegments();
  const router = useRouter();
  // const { isLoggedIn } = AuthStore.useState((s) => s);
  const { isLoggedIn } = useSelector((state) => state.auth);

  const navigationState = useRootNavigationState();

  React.useEffect(() => {
    if (!navigationState?.key) return;

    const inAuthGroup = segments[0] === "(auth)";

    if (
      // If the user is not signed in and the initial segment is not anything
      //  segment is not anything in the auth group.
      !isLoggedIn &&
      !inAuthGroup
    ) {
      // Redirect to the login page.
      router.replace("/splash");
    } else if (isLoggedIn) {
      // go to tabs root.
      router.replace("/(tabs)/home");
    }
  }, [isLoggedIn, segments, navigationState?.key]);

  return (
      <View>{!navigationState?.key ? <Text>LOADING...</Text> : <></>}</View>
  
  );
};
export default Index;
