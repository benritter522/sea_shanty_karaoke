import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 50,
        width: '100%',
        height: 100,
        backgroundColor: 'gray',
        justifyContent: 'space-around',
    },
    progressBarContainer: {
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
});

export default styles;