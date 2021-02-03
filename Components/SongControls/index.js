import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Audio } from 'expo-av'; //expo install expo-keep-awake to keep screen on, then npx pod-install for ios config
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';
import StyledButton from '../StyledButton';

const SongControls = (props) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [playbackInstance, setPlaybackInstance] = useState(null);
    // const [currentIndex, setCurrentIndex] = useState(0); // For a playlist
    const [volume, setVolume] = useState(1.0);
    const [isBuffering, setIsBuffering] = useState(false);
    const [positionMillis, setPositionMillis] = useState(0);

    const { lyrics, setLyrics, currentLyric, setCurrentLyric, lyricsLength } = props;
    const diameter = 60;

    // const unloadAudio = async () => {
    //     // adding this to the useEffect to prevent multiple instances playing at once
    //     if (playbackInstance) {
    //         await playbackInstance.unloadAsyc();
    //     }
    // }

    const componentDidMount = async () => {
        try { 
            await Audio.setAudioModeAsync({
                allowsRecordingIOS: false,
                interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
                playsInSilentModeIOS: true,
                interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
                shouldDuckAndroid: true,
                staysActiveInBackground: false, //true in tutorial for music app, don't think I want it though
                playThroughEarpieceAndroid: true
            });
            loadAudio();
        } catch(err) {
            console.log(err);
        }
    }

    const loadAudio = async () => {
        try {
            const playbackInstance = new Audio.Sound(); //can I share this variable name with a state variable?
            const source = require('./Fish.mp3'); // { uri: audioBookPlaylist[currentIndex].uri }
            const status = {
                shouldPlay: isPlaying,
                volume            
            }
            playbackInstance.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
            await playbackInstance.loadAsync(source, status, false);
            // console.log("playback duration", playbackInstance.status)
            setPlaybackInstance(playbackInstance); //can I share this variable name with a state variable?
        } catch (err) {
            console.log(err);
        }
    }
    const onPlaybackStatusUpdate = (status) => {
        setIsBuffering(status.isBuffering)
        setPositionMillis(status.positionMillis)
    }

    const handlePlayPause = async () => {
        isPlaying ? await playbackInstance.pauseAsync() : await playbackInstance.playAsync();
        setIsPlaying(!isPlaying);
    }


    const upLine = () => {
        playbackInstance.setPositionAsync(lyrics[currentLyric - 1].timestamp); // THIS WORKS!!!
        if(currentLyric <= 0) {
            console.warn("First Lyric Already Highlighted");
        } else {
            setCurrentLyric(currentLyric - 1);
        }
    }
    const downLine = () => {
        playbackInstance.setPositionAsync(lyrics[currentLyric + 1].timestamp); // THIS WORKS!!!
        if(currentLyric >= lyricsLength - 1) {
            console.warn("Last Lyric Already Highlighted");
        } else {
            setCurrentLyric(currentLyric + 1);
        }
        // scrollTo({x: 0, y: 5, animated: true})
    }
    const timestamp = () => {
        console.log("timestamp button pressed")
        console.log("playback position: ", positionMillis);
        lyrics[currentLyric].timestamp = positionMillis;
        setLyrics(lyrics);
        setCurrentLyric(currentLyric + 1);
        console.log(lyrics);
        console.log(currentLyric);
        // console.log("playback position: ", playbackInstance.getStatusAsync());
        // console.log("playback position: ", playbackInstance.getStatusAsync({ positionMillis }));

        // playbackInstance.setPositionAsync(10000); // THIS WORKS!!!
        // playbackInstance.setStatusAsync({ positionMillis: 10000 }); // THIS WORKS!!!
    }


    useEffect(() => {
        // unloadAudio();
        componentDidMount();
        setCurrentLyric(0);
    }, [])

    useEffect(() => {
        if(currentLyric < lyricsLength - 1) {
            if(positionMillis > lyrics[currentLyric + 1].timestamp) setCurrentLyric(currentLyric + 1)
        }
    }, [positionMillis])

    return (
        <View style={styles.container}>
            <View style={styles.progressBarContainer}>
                {/* <Text>I am a progress bar</Text> */}
            </View>
            <View style={styles.buttonContainer}>
                <StyledButton 
                    content={"UP"}
                    diameter={diameter}
                    onPress={() => upLine()}
                />
                <StyledButton 
                    content={"DN"}
                    diameter={diameter}
                    onPress={() => downLine()} 
                />
                <StyledButton 
                    content={
                        isPlaying ? (
                        <Ionicons name='ios-pause' size={diameter/2} color='#444' />
                        ) : (
                        <Ionicons name='ios-play' size={diameter/2} color='#444' />
                        )
                    }
                    diameter={diameter}
                    onPress={() => {
                        handlePlayPause();
                    }} 
                />
                {/* <StyledButton content={"T"} diameter={diameter} onPress={() => timestamp()} /> */}
                    
            </View>

        </View>
    )
}

export default SongControls;







// BELOW IS FROM REACT-NATIVE-SOUND-PLAYER--NOW USING EXPO-AV

// import SoundPlayer from 'react-native-sound-player'; //uninstall this later

    // const playMusic = () => {
    //     try {
    //         // SoundPlayer.playSoundFile('06_Fish_in_the_Sea', 'mp3');
    //         SoundPlayer.playUrl('./Fish.mp3')
    //     } catch(err) {
    //         console.log('cannot play sound file', err)
    //     }
    // }