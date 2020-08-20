import React from 'react';
import { Text, View } from 'react-native';

const RightScreen = ({ navigation }) => {
    const { navigate } = navigation;
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>right!!!</Text>
            <Text style={{ color: '#0000EE' }} onPress={() => navigate('Quiz')}>
                Go to the next question -{'>'}
            </Text>
            <Text style={{ color: '#0000EE' }} onPress={() => navigate('Projects')}>
                Or go to my projects. -{'>'}
            </Text>
        </View>
    );
};

export default RightScreen;
