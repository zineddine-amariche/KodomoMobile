import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const Inputs = ({ handleSubmit }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ width: "100%", padding: 20, gap: 10, flex: 1 }}>
        <View>
          <Text style={styles.label}>Nom</Text>
          <TextInput
            placeholder="Nom"
            nativeID="Nom"
            onChangeText={(text) => {
              emailRef.current = text;
            }}
            style={styles.textInput}
          />
        </View>
        <View>
          <Text style={styles.label}>Prenom</Text>
          <TextInput
            placeholder="Prenom"
            nativeID="Prenom"
            onChangeText={(text) => {
              emailRef.current = text;
            }}
            style={styles.textInput}
          />
        </View>
        <View>
          <Text style={styles.label}>Email</Text>
          <TextInput
            placeholder="Email"
            nativeID="Email"
            onChangeText={(text) => {
              emailRef.current = text;
            }}
            style={styles.textInput}
          />
        </View>
        <View>
          <Text style={styles.label}>Numéro de téléphone </Text>
          <TextInput
            placeholder="Numéro de téléphone "
            nativeID="Numéro de téléphone "
            onChangeText={(text) => {
              firstNameRef.current = text;
            }}
            style={styles.textInput}
          />
        </View>
        <View>
          <Text style={styles.label}>Last Name</Text>
          <TextInput
            placeholder="lastName"
            nativeID="lastName"
            onChangeText={(text) => {
              lastNameRef.current = text;
            }}
            style={styles.textInput}
          />
        </View>
        <View>
          <Text style={styles.label}>Mot de passe</Text>
          <TextInput
            placeholder="Mot de passe"
            secureTextEntry={true}
            nativeID="Mot de passe"
            onChangeText={(text) => {
              passwordRef.current = text;
            }}
            style={styles.textInput}
          />
        </View>
        <View>
          <Text style={styles.label}>Confirmer mot de passe </Text>
          <TextInput
            placeholder="Confirmer mot de passe "
            secureTextEntry={true}
            nativeID="Confirmer mot de passe "
            onChangeText={(text) => {
              passwordRef.current = text;
            }}
            style={styles.textInput}
          />
        </View>
      </View>
      <View style={{ padding: 20, alignItems: "center" }}>
        <TouchableOpacity
          style={{
            backgroundColor: "#FFF0EA",
            paddingVertical: 10,
            paddingHorizontal: 30,
            borderRadius: 20,
            width:"100%",
            alignItems:"center"
          }}
          onPress={() => {
            // AuthStore.update((s) => {
            //   s.isLoggedIn = true;
            // });
            // dispatch(login(true))
            handleSubmit();
          }}
        >
          <Text>NEXT</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Inputs;

const styles = StyleSheet.create({
  label: {
    marginBottom: 4,
    color: "#F88E8E",
  },
  textInput: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#F88E8E",
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginBottom: 8,
    height: 40,
  },
});
