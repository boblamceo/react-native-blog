import React from 'react';
import { SafeAreaView, Button } from 'react-native';

const ChooseScreen = ({ navigation }) => {
    return (
        <SafeAreaView>
            <Button
                title="Date Picker"
                onPress={() => {
                    navigation.navigate('Date Picker');
                }}
            />
            <Button
                title="Camera"
                onPress={() => {
                    navigation.navigate('Camera');
                }}
            />
            <Button
                title="Dice"
                onPress={() => {
                    navigation.navigate('Dice');
                }}
            />
            <Button
                title="Coronavirus Tracker"
                onPress={() => {
                    navigation.navigate('Corona');
                }}
            />
        </SafeAreaView>
    );
};

export default ChooseScreen;
