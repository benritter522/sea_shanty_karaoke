import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  const fishInTheSeaLyrics = [
    "Come all you young sailor men, listen to me",
    "I'll sing you a song of the fish in the sea:",
    "",
    "And it's windy weather, boys, stormy weather, boys",
    "When the wind blows, we're all together, boys;",
    "Blow ye winds westerly, blow ye winds, blow",
    "Jolly sou'wester, boys, steady she goes",
    "",
    "Up jumps the eel with his slippery tail",
    "Climbs up aloft and reefs the topsail",
    "",
    "And it's windy weather, boys, stormy weather, boys",
    "When the wind blows, we're all together, boys;",
    "Blow ye winds westerly, blow ye winds, blow",
    "Jolly sou'wester, boys, steady she goes",
    "",
    "Then up jumps the shark with his nine rows of teeth",
    "Saying, 'You eat the dough boys, and I'll eat the beef!'",
    "",
    "And it's windy weather, boys, stormy weather, boys",
    "When the wind blows, we're all together, boys;",
    "Blow ye winds westerly, blow ye winds, blow",
    "Jolly sou'wester, boys, steady she goes",
    "",
    "Up jumps the whale, the largest of all",
    "'If you want any wind, well, I'll blow ye a squall!'",
    "",
    "And it's windy weather, boys, stormy weather, boys",
    "When the wind blows, we're all together, boys;",
    "Blow ye winds westerly, blow ye winds, blow",
    "Jolly sou'wester, boys, steady she goes",
  ]
  
  const [song, setSong] = useState("");
  const [lyrics, setLyrics] = useState([]);

  useEffect(() => {
    setSong("Fish In The Sea");
    setLyrics(fishInTheSeaLyrics);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.buffer}></Text>
      <View style={styles.appTitle}>
        <Text>Sea Shanty Karaoke</Text>
      </View>
      <View style={styles.songTitle}>
        <Text>{song}</Text>
      </View>
      <View style={styles.songLyrics}>
        {
          lyrics.map((lyric, index) => {
            return(
              <Text key={index}>{lyric}</Text>
            )
          })
        }
      </View>
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
  buffer: {
    height: 25,
    // backgroundColor: 'gray',
  }, 
  appTitle: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  songTitle: {
    flex: 2,
    justifyContent: 'center',
    // backgroundColor: 'gray',

  },
  songLyrics: {
    flex: 10,
    width: 300,
    alignSelf: 'center',
    backgroundColor: 'gray',

    // justifyContent: 'center',
    // alignItems: 'center',
    // height: 50,
  },
  songProgressBar: {
    flex: 1,
  },
  songControls: {
    flex: 3,
  },
});
