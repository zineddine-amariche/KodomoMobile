import { Text, View, TextInput, StyleSheet } from "react-native";
import { useRef } from "react";
import { AuthStore } from "../../store/store.js";
import { Stack, useRouter } from "expo-router";
import Forms from "../../components/register/Forms/index.js";

export default function Register() {
  const router = useRouter();
  const emailRef = useRef("");
  const firstNameRef = useRef("");
  const lastNameRef = useRef("");
  const passwordRef = useRef("");

  return (
    <View style={{ flex: 1, backgroundColor:"#FFF"  }}>
    <Forms/>
    </View>
  );
}

const styles = StyleSheet.create({

});
