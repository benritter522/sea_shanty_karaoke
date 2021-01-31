import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './Components/Header';
import SongPage from './Components/SongPage';

export default function App() {

  return (
    <View style={styles.container}>
      <Header />
      <SongPage />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
});
