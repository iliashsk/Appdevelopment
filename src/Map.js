import react from 'react'
import React from 'react';
import {StyleSheet, Text, View,ScrollView,Image,TextInput} from 'react-native';
import MapView from "react-native-maps";

const  Map=(props)=>{

const getFullName = (firstName, secondName, thirdName) => {
  return firstName + ' ' + secondName + ' ' + thirdName;
};



  return(<>
 <ScrollView>
      <Text>Some text {props.name}</Text>
      <View>
        <Text>Some more text</Text>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{width: 200, height: 200}}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        placeholder="You can type in me"
      />
      <Text>Hello, I am {getFullName('Rum', 'Tum', 'Tugger')}!</Text>
    </ScrollView>
  </>)
}

export default Map