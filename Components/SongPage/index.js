import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
// import { Audio } from 'expo-av'; //expo install expo-keep-awake to keep screen on, then npx pod-install for ios config

import SongTitle from '../SongTitle';
import SongLyrics from '../SongLyrics';
import SongControls from '../SongControls';
import styles from './styles';

const SongPage = () => {
    const fishInTheSeaLyrics = [
        {
            "text": "Come all you young sailor men, listen to me",
            "timestamp": 0,
        },
        {
            "text": "I'll sing you a song of the fish in the sea:",
            "timestamp": 4466,
        },
        {
            "text": "",
            "timestamp": 7468,
        },
        {
            "text": "And it's windy weather, boys, stormy weather, boys",
            "timestamp": 7976,
        },
        {
            "text": "When the wind blows, we're all together, boys;",
            "timestamp": 11959,
        },
        {
            "text": "Blow ye winds westerly, blow ye winds, blow",
            "timestamp": 15464,
        },
        {
            "text": "Jolly sou'wester, boys, steady she goes",
            "timestamp": 18958,
        },
        {
            "text": "",
            "timestamp": 21957,
        },
        {
            "text": "Up jumps the eel with his slippery tail",
            "timestamp": 22462,
        },
        {
            "text": "Climbs up aloft and reefs the topsail",
            "timestamp": 25961,
        },
        {
            "text": "",
            "timestamp": 28953,
        },
        {
            "text": "And it's windy weather, boys, stormy weather, boys",
            "timestamp": 29463,
        },
        {
            "text": "When the wind blows, we're all together, boys;",
            "timestamp": 32961,
        },
        {
            "text": "Blow ye winds westerly, blow ye winds, blow",
            "timestamp": 36462,
        },
        {
            "text": "Jolly sou'wester, boys, steady she goes",
            "timestamp": 39951,
        },
        {
            "text": "",
            "timestamp": 42951,
        },
        {
            "text": "Then up jumps the shark with his nine rows of teeth",
            "timestamp": 43464,
        },
        {
            "text": "Saying, 'You eat the dough boys, and I'll eat the beef!'",
            "timestamp": 46951,
        },
        {
            "text": "",
            "timestamp": 49950,
        },
        {
            "text": "And it's windy weather, boys, stormy weather, boys",
            "timestamp": 50454,
        },
        {
            "text": "When the wind blows, we're all together, boys;",
            "timestamp": 54448,
        },
        {
            "text": "Blow ye winds westerly, blow ye winds, blow",
            "timestamp": 57947,
        },
        {
            "text": "Jolly sou'wester, boys, steady she goes",
            "timestamp": 61464,
        },
        {
            "text": "",
            "timestamp": 64470,
        },
        {
            "text": "Up jumps the whale, the largest of all",
            "timestamp": 64962,
        },
        {
            "text": "'If you want any wind, well, I'll blow ye a squall!'",
            "timestamp": 67969,
        },
        {
            "text": "",
            "timestamp": 70954,
        },
        {
            "text": "And it's windy weather, boys, stormy weather, boys",
            "timestamp": 71456,
        },
        {
            "text": "When the wind blows, we're all together, boys;",
            "timestamp": 75455,
        },
        {
            "text": "Blow ye winds westerly, blow ye winds, blow",
            "timestamp": 78954,
        },
        {
            "text": "Jolly sou'wester, boys, steady she goes",
            "timestamp": 82466,
        },
    ];
    const [lyrics, setLyrics] = useState(fishInTheSeaLyrics);
    const [currentLyric, setCurrentLyric] = useState(0);
    const [lyricsLength] = useState(lyrics.length);

    useEffect(() => {
        setCurrentLyric(0);
    }, [])
    console.log(lyrics)
    return (
        <View style={styles.container}>
            <SongTitle />
            <View style={styles.lyricsAndControls}>
                <SongLyrics 
                    lyrics={lyrics}
                    setLyrics={setLyrics}
                    currentLyric={currentLyric}
                />
                <SongControls 
                    lyrics={lyrics}
                    setLyrics={setLyrics}
                    lyricsLength={lyricsLength}
                    currentLyric={currentLyric} setCurrentLyric={setCurrentLyric}
                />
            </View>
        </View>
    );
};

export default SongPage;

// const [song, setSong] = useState("");
// const [lyrics, setLyrics] = useState([]);

// useEffect(() => {
//     setSong("Fish In The Sea");
//     setLyrics(fishInTheSeaLyrics);
// }, []);