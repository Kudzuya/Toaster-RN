import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ToastAndroid, TouchableOpacity } from 'react-native';

export default function App() {
  const showToast = () =>{
    ToastAndroid.showWithGravityAndOffset(
      "You clikced this toast!",
      ToastAndroid.LONG,
      ToastAndroid.TOP,
      50,
      50
    )
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>CLickyClick</Text>
      <StatusBar style="auto" />

      <TouchableOpacity style={styles.button} onPress={() => showToast()}>
        <Text style={{color: "#fff"}}>Press me</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    text: {
      color: "#304ffe",
      fontSize: 20,
      padding: 20,
    },
  
    button: {
      borderRadius: 10,
      backgroundColor: '#29b6f6',
      width: 150,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
    }
});
