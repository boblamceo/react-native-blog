import React, { useState } from 'react';
import { StyleSheet, TextInput, Text, View, Button } from 'react-native';

const AuthScreen = ({ navigation }) => {
    const secretPassword = 'hello';
    const [ password, setPassword ] = useState('');
    const [ errorMessage, setError ] = useState(null);
    return (
        <View style={{ flex: 1, marginTop: 120, alignItems: 'center' }}>
            <Text style={{ textAlign: 'center', margin: 10 }}>Write the password 🤔</Text>
            <TextInput
                placeholder="password..."
                style={styles.input}
                onChangeText={(passwordCandidate) => {
                    setPassword(passwordCandidate);
                }}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
            />
            <Button
                title="done"
                onPress={() => {
                    if (password === secretPassword) {
                        navigation.navigate('MainStuff');
                    } else {
                        setError('U hacker??????');
                    }
                }}
            />
            {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        width: 300,
        height: 30,
        borderRadius: 5,
    },
    errorMessage: {
        color: 'red',
    },
});

export default AuthScreen;
