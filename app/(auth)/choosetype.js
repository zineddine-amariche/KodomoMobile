import React, { useState } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from "react-native";
  import { Stack, useRouter } from "expo-router";

  import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";
const Choosetype = () => {
    const router = useRouter();
    const [checked, setchecked] = useState(null)

  return (
    <SafeAreaView style={{ flex: 1,  backgroundColor:"#FFF" }}>
 
 <View style={{flex:1 ,padding:20}}>
    <Text>choose a type to create an account :</Text>
    <View>
    <RadioButtonGroup
        containerStyle={{ marginTop: 30 }}
        selected={checked}
        onSelected={(value) => setchecked(value)}
        radioBackground="#FFF0EA"
        
      >
        <RadioButtonItem value="Nourrice" label="Nourrices" style={{marginBottom:1}}  />
        <View style={{height:10}}></View>
        <RadioButtonItem
          value="Parents"
          label={
            <Text >Parents</Text>
          }
        />
      </RadioButtonGroup>
    </View>

 </View>
    <TouchableOpacity
      style={{
        backgroundColor: "#FFF0EA",
        paddingVertical:10,
        paddingHorizontal:30,
        borderRadius:20,
        width:"90%",
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"center"
      }}
      onPress={() => {
        router.push("/register");
      }}
      disabled={!checked || checked=='Nourrice' }
    >
      <Text>Next</Text>
    </TouchableOpacity>
 

 
  </SafeAreaView>
  )
}

export default Choosetype

const styles = StyleSheet.create({})