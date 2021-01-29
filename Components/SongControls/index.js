import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import StyledButton from '../StyledButton';

const SongControls = () => {
    return (
        <View style={styles.container}>
            <View style={styles.progressBarContainer}>
                <Text>I am a progress bar</Text>
            </View>
            <View style={styles.buttonContainer}>
                <StyledButton />
                <StyledButton />
                <StyledButton />
            </View>

        </View>
    )
}

export default SongControls;