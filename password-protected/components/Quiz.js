import React from 'react';
import { Text, View, FlatList } from 'react-native';

const Quiz = ({ styles, question, answers, renderItem }) => {
    return (
        <View>
            <Text />
            <Text style={styles.question}>{question}</Text>
            <Text />
            <FlatList
                data={answers}
                renderItem={renderItem}
                keyExtractor={() => JSON.stringify(Math.floor(Math.random() * 1000))}
            />
        </View>
    );
};

export default Quiz;
