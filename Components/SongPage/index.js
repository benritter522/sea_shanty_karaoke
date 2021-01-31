import React, { useState } from 'react';
import { View } from 'react-native';

import SongTitle from '../SongTitle';
import SongLyrics from '../SongLyrics';
import SongControls from '../SongControls';
import styles from './styles';

const SongPage = () => {

    return (
        <View style={styles.container}>
            <SongTitle />
            <View style={styles.lyricsAndControls}>
                <SongLyrics />
                <SongControls />
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