import React from 'react';
import {SafeAreaView, StyleSheet, TextInput,Text,Button,Alert} from 'react-native';

const TextInputExample = () => {
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');
  const [button,setButton] =React.useState('')

  return (
    <SafeAreaView>
      <Text style={styles.header} align='center'>
      Login here
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder='Enter your  Email'
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        secureTextEntry={true}
        placeholder="Enter Your Password"
        keyboardType="numeric"
      />
      <Button style={{marginLeft:20,marginRight:20}}
        title="Press me"
        onPress={() =>{
          setButton("iliash sk")
          
        }} 
      />
      <Text style={{textAlign:"center"}}>{button}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    flex:1,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,

  },
  header:{
     flex:2,
    fontSize:30,
    textAlign:'center',
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
    marginLeft:20,
  }
});

export default TextInputExample;