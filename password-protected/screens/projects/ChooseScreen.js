import React from 'react';
import { SafeAreaView, Button } from 'react-native';

const ChooseScreen = ({ navigation }) => {
    return (
        <SafeAreaView>
            <Button
                title="Date Picker"
                onPress={() => {
                    navigation.navigate('PassScreen');
                }}
            />
        </SafeAreaView>
    );
};

export default ChooseScreen;
