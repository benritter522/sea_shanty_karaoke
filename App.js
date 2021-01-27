import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Song from './Components/Song/Song';

export default function App() {

  return (
    <View style={styles.container}>
      <Song />
      {/* <StatusBar style={styles.grayBackground}/> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  songProgressBar: {
    flex: 1,
  },
  songControls: {
    flex: 3,
  },
  // grayBackground: {
  //   backgroundColor: 'gray',
  // }
});
