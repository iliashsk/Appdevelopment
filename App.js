import { StatusBar } from 'expo-status-bar';
import {AppRegistry, StyleSheet, Text, View } from 'react-native';
import Cat from './src/Cat.js'
export default function App() {
  return (
    <View style={styles.container}>
      <Cat/>
      <Text style={styles.hello}>
      how are You My friends
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hello: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
    color:'goldenrod',
  },
});
AppRegistry.registerComponent(
  'MyReactNativeApp',
  () => HelloWorld,
);