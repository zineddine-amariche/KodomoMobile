import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import { Image } from "expo-image";

import babay from "../../assets/images/baby.png";
import next from "../../assets/images/next.png";
import {useDispatch} from 'react-redux';

export default function splash() {
  const router = useRouter();

  let blurHash = "LGFFaXYk^6#M@-5c,1J5@[or[Q6.";

   return (
    <SafeAreaView style={{ flex: 1, alignItems: "center",justifyContent:"space-around",backgroundColor:"#FFF" }}>
      <Stack.Screen options={{ title: "Login" }} />
      <Text style={{ color: "#F88E8E", fontSize: 38, textAlign: "center",fontWeight:"500" }}>
        Recrutez des {"\n"} Babysitters
      </Text>
      <View style={{ height: 300, width: 300 }}>
        <Image
          style={styles.Image}
          source={babay}
          placeholder={blurHash}
          contentFit="contain"
          transition={600}
        />
      </View>
      <View style={{paddingHorizontal:20}}>

      <Text style={{fontSize:24,fontWeight:400,textAlign:"center" }}>
        Lorem ipsum dolor sit amet consectetur. Aliquet eleifend sit urna at
        curabitur nulla. Purus egestas integer duis consequat.
      </Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "#FFF0EA",
          paddingVertical:10,
          paddingHorizontal:30,
          borderRadius:20
        }}
        onPress={() => {
          // AuthStore.update((s) => {
          //   s.isLoggedIn = true;
          // });
          // dispatch(login(true))
          router.push("/(auth)/choosetype");
        }}
      >
        <Text>Next</Text>
      </TouchableOpacity>
      <Image
          style={styles.Image2}
          source={next}
          placeholder={blurHash}
          contentFit="contain"
          transition={600}
        />

      {/* <Text
        onPress={() => {
          AuthStore.update((s) => {
            s.isLoggedIn = true;
          });
          router.replace("/(tabs)/home");
        }}
      >
        Login
      </Text>
      <Text
        onPress={() => {
          AuthStore.update((s) => {
            s.isLoggedIn = true;
          });
          router.push("/create-account");
        }}
      >
        Create Account
      </Text> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Image: {
    width: 300,
    flex: 1,
    height: 300,
  },
  Image2: {
    width: 80,
    height: 20,
  },
});
