import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const MainScreen = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('../assets/welcome.gif')} style={styles.image} />
            <Text style={{ fontSize: 30, textAlign: 'center' }}>Welcome... to... my.... projects 🖥</Text>
            <Text style={{ fontSize: 30, textAlign: 'center' }}>
                {' '}
                Start... the... journey... by... looking... at... the bottom... of... the... app
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        borderRadius: 5,
    },
});

export default MainScreen;
