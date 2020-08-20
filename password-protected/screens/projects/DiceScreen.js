import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

const DiceScreen = () => {
    const [ rollNum, setRollNum ] = React.useState(1);

    const roll = () => {
        return Math.ceil(Math.random() * 6);
    };

    const button = () => {
        setRollNum(roll());
    };

    return (
        <SafeAreaView style={styles.container}>
            <Button title="Roll!" onPress={() => button()} style={{ width: 300 }} />
            <Text style={styles.text}>{rollNum}</Text>
        </SafeAreaView>
    );
};

const styles = {
    text: {
        textAlign: 'center',
        fontSize: 60,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '50%',
    },
};

export default DiceScreen;
