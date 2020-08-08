import React from 'react';
import { Text, View, Image } from 'react-native';

const WrongScreen = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: 'red' }}>wrong. Reload the app and try again.</Text>
            <Text />
            <Image source={require('../assets/wrong.gif')} />
        </View>
    );
};

export default WrongScreen;
