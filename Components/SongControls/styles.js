import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        // position: 'absolute',
        // bottom: 50,
        width: '20%',
        height: '100%',
        // borderWidth: 1,
        flexDirection: 'row',
        borderColor: 'black',
        justifyContent: 'space-between',
    },
    progressBarContainer: {
        height: '100%',
        width: 10,
        backgroundColor: 'gray',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
});

export default styles;