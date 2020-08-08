import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Quiz from '../components/Quiz';

const QuizScreen = ({ navigation }) => {
    const shuffle = (arr) => {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [ arr[i], arr[j] ] = [ arr[j], arr[i] ];
        }
        return arr;
    };
    const { navigate } = navigation;
    const firstNumber = Math.ceil(Math.random() * 10000);
    const secondNumber = Math.ceil(Math.random() * 10000);
    const total = firstNumber + secondNumber;
    const fakeTotal = total + 1;
    let index = 0;
    return (
        <View>
            <Text style={styles.title}>quizzz</Text>
            <Quiz
                styles={styles}
                question={`What is ${firstNumber} + ${secondNumber}?`}
                answers={shuffle([ { result: total }, { result: fakeTotal } ])}
                renderItem={({ item }) => {
                    index += 1;
                    return (
                        <TouchableOpacity>
                            <Text
                                style={styles.answer}
                                onPress={() => {
                                    if (total !== item.result) {
                                        navigate('WrongScreen');
                                    } else {
                                        navigate('RightScreen');
                                    }
                                }}
                            >
                                {index}. {item.result}
                            </Text>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 50,
        textAlign: 'center',
        marginTop: 30,
    },
    question: {
        textAlign: 'center',
        fontSize: 20,
    },
    answer: {
        textAlign: 'center',
    },
});

export default QuizScreen;
