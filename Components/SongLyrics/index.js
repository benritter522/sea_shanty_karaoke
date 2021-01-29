import React from 'react';
import { View, Text, FlatList } from 'react-native';

import styles from './styles';

const SongLyrics = () => {
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
    
    return (
        <View style={styles.container}>
            <FlatList 
                style={styles.songLyrics}
                data={fishInTheSeaLyrics}
                renderItem={({item}) => <Text>{item}</Text>}
            />
        </View>
    )
};

export default SongLyrics;