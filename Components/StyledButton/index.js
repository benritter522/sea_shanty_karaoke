import React from 'react';
import { Pressable, View, Text } from 'react-native';

import styles from './styles';

const StyledButton = (props) => {
    const { diameter, content, onPress } = props;
    return (
        <View style={[styles.container,{height: diameter}, {width: diameter}, {borderRadius: diameter/4}]}>
            <Pressable
                style={styles.button}
                onPress={() => onPress()}
            >
                {/* <Text style={[styles.text, {color: textColor}]}>{content}</Text> */}

                <Text style={styles.text}>{content}</Text>
            </Pressable>
        </View>
    );
};

export default StyledButton;