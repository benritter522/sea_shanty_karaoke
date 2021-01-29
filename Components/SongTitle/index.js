import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const SongTitle = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.songTitle}>Fish In The Sea</Text>
        </View>
    );
};

export default SongTitle;
