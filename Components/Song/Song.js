// import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';

export default function Song() {

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
            <View style={styles.songTitle}>
                <Text>{song}</Text>
            </View>
            <ScrollView style={styles.songLyrics}> 
            {
                lyrics.map((lyric, index) => {
                    return(
                        <Text key={index}>{lyric}</Text>
                    )
                })
            }
            </ScrollView>
            {/* <StatusBar style="auto" /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 3,
        backgroundColor: '#fff',
        margin: 25,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    songTitle: {
        // flex: 1,
        justifyContent: 'center',
        // backgroundColor: 'gray',
    },
    songLyrics: {
        // flex: 1,
        width: 300,
        // alignSelf: 'center',
        backgroundColor: 'gray',
        // justifyContent: 'center',
        // alignItems: 'center',
        // height: 50,
    },
})