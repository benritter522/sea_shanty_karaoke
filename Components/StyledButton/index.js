import React from 'react';
import { Button, View } from 'react-native';

import styles from './styles';

const StyledButton = () => {
    return (
        <View style={styles.container}>
            <Button title="Play" />
        </View>
    )
}

export default StyledButton;