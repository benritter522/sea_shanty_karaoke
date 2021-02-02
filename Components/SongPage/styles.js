import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        // backgroundColor: 'lightblue',
        alignItems: 'center',
        zIndex: 0,
    },
    lyricsAndControls: {
        height: '80%',
        width: '95%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    image: {
        height: '103%',
        width: Dimensions.get('window').width,
        // resizeMode: 'cover',
        position: 'absolute',
        left: 0,
        bottom: 0,
    },
});

export default styles;