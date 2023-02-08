
import { StatusBar } from 'expo-status-bar';
import {AppRegistry,SafeAreaView, StyleSheet, Text, View,ScrollView } from 'react-native';
import LotsOfStyles from './src/LotsOfStyles.js'
import TextInputExample from './src/TextInputExample.js'
import Map from './src/Map'

export default function App() {
  return (
    <>
    <ScrollView style={styles.scrollView}>

          <TextInputExample/>
          <LotsOfStyles/>
          <Map name="iliash sk"/>

    </ScrollView>
    </>
  );
}


const styles = StyleSheet.create({
  scrollView: {
    flex:1,
    backgroundColor: '#F0E68C',
    marginHorizontal: 5,
    marginTop:30,
  }
});

AppRegistry.registerComponent(
  'MyReactNativeApp',
  () => HelloWorld,
);