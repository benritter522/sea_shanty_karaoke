import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Song from './Components/Song/Song';
import NextLineButton from './Components/MusicControls/NextLineButton';
import NextSongButton from './Components/MusicControls/NextSongButton';
import PlayPauseButton from './Components/MusicControls/PlayPauseButton';
import PreviousLineButton from './Components/MusicControls/PreviousLineButton';
import PreviousSongButton from './Components/MusicControls/PreviousSongButton';

export default function App() {

  return (
    <View style={styles.container}>
      <View style={styles.appTitle}>
        <Text>Sea Shanty Karaoke</Text>
      </View>
      <Song style={styles.songContainer} />
      <View style={styles.songControls}>
        <PreviousSongButton />
        <PlayPauseButton />
        <NextSongButton />
      </View>
      <View>
        <PreviousLineButton />
        <NextLineButton />
      </View>
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
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  appTitle: {
    flex: 1,
    justifyContent: 'center',
    // backgroundColor: 'blue'
  },
  songContainer: {
    flex: 1,
  }, 
  songProgressBar: {
    flex: 1,
  },
  songControls: {
    flex: 1,
    // alignSelf: 'right'
  },
  // grayBackground: {
  //   backgroundColor: 'gray',
  // }
});
