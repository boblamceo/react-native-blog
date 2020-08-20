import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { navigate } from '../navigationRef';

export const DateTime = () => {
    const [ date, setDate ] = useState(new Date(1598051730000));
    const [ errorMessage, setError ] = useState(null);
    console.log('test', date.toString());
    const regex = /Thu Jul 05 2018/;

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
    };

    return (
        <View>
            <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode="date"
                is24Hour={true}
                display="default"
                onChange={onChange}
            />

            <Button
                title="Submit"
                onPress={() => {
                    if (regex.test(date.toString())) {
                        navigate('Choose Your Project');
                    } else {
                        setError('wrong!!! are you invading this app???');
                    }
                }}
            />
            {errorMessage ? <Text style={{ color: 'red', textAlign: 'center' }}>{errorMessage}</Text> : null}
        </View>
    );
};
