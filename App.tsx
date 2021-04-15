import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [url, setURL] = useState("");
  const [res, setRes] = useState("");
  
  const req = () =>{
    axios.get(`${url}`).then( response => {
      console.log(response)
      setRes( JSON.stringify(response.data))
    }).catch(err => {
      console.log(err);
      setRes(JSON.stringify(err));
    })
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.viewButtons}>
        <TouchableOpacity style={[styles.button, {backgroundColor: '#bd93f9'}]}>
          <Text>Get</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.url}
        placeholder="requisição"
        value={url}
        onChangeText={setURL}
      />
      <TouchableOpacity style={styles.buttonSend} onPress={req}>
        <Text> Send </Text>
      </TouchableOpacity>
      <View style={styles.response}>
        <ScrollView>
        <Text style={{color: '#f1fa8c'}}>
        {res}
        </Text>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    flex: 1,
    backgroundColor: '#282a36',
    alignItems: 'center',
    justifyContent: 'center',
  },
  url:{
    width: "90%",
    height: 40,
    backgroundColor: '#f8f8f2',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#6272a4',
    paddingHorizontal: 20
  },
  viewButtons:{
    flexDirection: 'row'
  },
  button:{
    alignItems:'center',
    justifyContent:'center',
    height: 40,
    width:50,
    marginBottom: 10,
    borderRadius: 10
  },
  buttonSend:{
    alignItems:'center',
    justifyContent:'center',
    width: "90%",
    height: 40,
    backgroundColor: '#8be9fd',
    borderRadius: 10,
    marginVertical: 20
  },
  response:{
    flex: 1,
    width: '100%'
  }
});
