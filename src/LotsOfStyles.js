import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const LotsOfStyles = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.red}>just red</Text>
      <Text style={styles.bigBlue}>just bigBlue</Text>
      <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
      <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginLeft:20
  },
  bigBlue: {
    flex:1,
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
    marginLeft:20,
  },
  red: {
    color: 'red',
    marginLeft:20
  },
});

export default LotsOfStyles;