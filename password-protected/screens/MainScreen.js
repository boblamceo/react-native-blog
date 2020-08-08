import React from 'react';
import { Text, View } from 'react-native';

const MainScreen = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 30, textAlign: 'center' }}>You broke into the secret chamber. 😱</Text>
            <Text style={{ fontSize: 30, textAlign: 'center' }}> Go to QuestionScreen to go to the next task.</Text>
        </View>
    );
};

export default MainScreen;
