import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
// import { Audio } from 'expo-av'; //expo install expo-keep-awake to keep screen on, then npx pod-install for ios config

import SongTitle from '../SongTitle';
import SongLyrics from '../SongLyrics';
import SongControls from '../SongControls';
import styles from './styles';

const SongPage = () => {
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

    const [currentLyric, setCurrentLyric] = useState(0);
    const [lyricsLength] = useState(fishInTheSeaLyrics.length);

    useEffect(() => {
        setCurrentLyric(0);
    }, [])

    return (
        <View style={styles.container}>
            <SongTitle />
            <View style={styles.lyricsAndControls}>
                <SongLyrics 
                    lyrics={fishInTheSeaLyrics}
                    currentLyric={currentLyric}
                />
                <SongControls 
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