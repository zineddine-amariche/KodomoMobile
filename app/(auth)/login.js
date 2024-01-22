import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { AuthStore } from "../../store/store.js";
import { Stack, useRouter } from "expo-router";
import { Image } from "expo-image";

import babay from "../../assets/images/baby.png";
import next from "../../assets/images/next.png";
import { login } from "../../store/Features/app/authSlice/index.js";
import {useDispatch} from 'react-redux';

export default function Login() {
  const router = useRouter();

  let blurHash = "LGFFaXYk^6#M@-5c,1J5@[or[Q6.";

  const dispatch = useDispatch()
   return (
    <SafeAreaView style={{ flex: 1, alignItems: "center",justifyContent:"space-around",backgroundColor:"#FFF" }}>
      <Stack.Screen options={{ title: "Login" }} />
      
     <Text>login</Text>
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
