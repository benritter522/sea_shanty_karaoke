import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';

import styles from './styles';

const SongLyrics = (props) => {

    const { currentLyric, lyrics } = props;

    return (
        <View style={styles.container}>
            <FlatList 
                style={styles.songLyrics}
                data={lyrics}
                showsVerticalScrollIndicator={true}
                keyExtractor={(item, index) => index}
                renderItem={({item, index}) => {
                    const backgroundColor = index === currentLyric ? 'yellow' : 'transparent';
                    return(
                        <Text
                            style={{ backgroundColor }}
                        >{item.text}</Text>
                    );
                }}
            />
        </View>
    )
};

export default SongLyrics;