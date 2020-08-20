import React from 'react';
import { Text, Button, View } from 'react-native';

const Welcome = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>WELCOME TO CORONA</Text>
            <Button title="Go to coronavirus screen" onPress={() => navigation.navigate('Corona')} />
        </View>
    );
};

export default Welcome;
