import React from 'react';
import { Text, StyleSheet, SafeAreaView } from 'react-native';
import { DateTime } from '../../components/DateTimePicker';
const PassScreen = () => {
    return (
        <SafeAreaView>
            <Text style={styles.title}>Date Picker</Text>
            <Text />
            <Text style={styles.question}>What is My Sister's Birthday?</Text>
            <DateTime />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 50,
        textAlign: 'center',
    },
    question: {
        fontSize: 20,
        textAlign: 'center',
    },
});

export default PassScreen;
