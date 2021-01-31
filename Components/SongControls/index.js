import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import StyledButton from '../StyledButton';

const SongControls = (props) => {

    const { currentLyric, setCurrentLyric, lyricsLength } = props;
    const diameter = 60;

    const upLine = () => {
        if(currentLyric <= 0) {
            console.warn("First Lyric Already Highlighted");
        } else {
            setCurrentLyric(currentLyric - 1);
        }
    }

    const downLine = () => {
        if(currentLyric >= lyricsLength - 1) {
            console.warn("Last Lyric Already Highlighted");
        } else {
            setCurrentLyric(currentLyric + 1);
        }
    }
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
                    content={"P"}
                    diameter={diameter}
                    onPress={() => {
                        console.warn("P was pressed");
                    }} 
                />
            </View>

        </View>
    )
}

export default SongControls;