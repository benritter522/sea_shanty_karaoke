import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import StyledButton from '../StyledButton';

const SongControls = () => {
    const diameter = 60;
    return (
        <View style={styles.container}>
            <View style={styles.progressBarContainer}>
                {/* <Text>I am a progress bar</Text> */}
            </View>
            <View style={styles.buttonContainer}>
                <StyledButton 
                    diameter={diameter}
                    content={"UP"}
                    onPress={() => {
                        console.warn("UP was pressed");
                    }} 
                />
                <StyledButton 
                    diameter={diameter}
                    content={"DN"}
                    onPress={() => {
                        console.warn("DN was pressed");
                    }} 
                />
                <StyledButton 
                    diameter={diameter}
                    content={"P"}
                    onPress={() => {
                        console.warn("P was pressed");
                    }} 
                />
            </View>

        </View>
    )
}

export default SongControls;