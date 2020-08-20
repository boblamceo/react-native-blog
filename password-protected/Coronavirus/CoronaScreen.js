import React, { useState } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Overlay } from 'react-native-elements';
import { data } from './coronavirusData';
import MapView, { Marker } from 'react-native-maps';
import Break from './Break';
const CoronaScreen = () => {
    const [ visible, setVisibility ] = useState(false);
    const [ country, setCountry ] = useState('anonymous');
    const [ deaths, setDeaths ] = useState(0);
    const [ cases, setCases ] = useState(0);
    const [todayCases, setTodayCases] = useState(0)
    const [todayDeaths, setTodayDeaths] = useState(0)
    const [ tests, setTests ] = useState(0);
    const [ recovered, setRecovered ] = useState(0);

    const changeVisibility = (newCountry, newDeaths, newCases, newTests, newRecovered, newTodayCases, newTodayDeaths) => {
        setVisibility(!visible);
        setCountry(newCountry);
        setDeaths(newDeaths);
        setCases(newCases);
        setTests(newTests);
        setTodayCases(newTodayCases)
        setTodayDeaths(newTodayDeaths)
        setRecovered(newRecovered);
    };

    const returned = data['_55']['_55'].data;
    const countInfo = returned.map(({ countryInfo }) => countryInfo);
    return (
        <>
        <MapView style={{ borderWidth: 1, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{fontSize: 60}}>+</Text>
            {returned.map(({country, deaths, cases, tests, recovered, todayCases, todayDeaths}, index) => {
                return (
                    <Marker
                        coordinate={{ latitude: countInfo[index].lat, longitude: countInfo[index].long }}
                        key={`${Math.random() * Number.MAX_VALUE}`}
                        onPress={() =>
                            changeVisibility(
                                country,
                                deaths,
                                cases,
                                tests,
                                recovered,
                                todayCases,
                                todayDeaths
                            )}
                        style={{
                            alignItems: 'center'
                        }}
                    >
                        <Image source={{
                            uri: countInfo[index].flag
                        }}
                        style={{height: 20, width: 30}}></Image>
                        <Break size={1}></Break>
                        <View style={{ backgroundColor: '#e01300', padding: 2, borderRadius: 50 }}>
                            <Text>{returned[index].cases}</Text>
                        </View>
                    </Marker>
                );
            })}

        </MapView>
        <Overlay
                isVisible={visible}
                onBackdropPress={changeVisibility}
                style={{ flex: 1 }}
            >
                <View>
                <Text style={styles.title}>{country}</Text>
                <Text style={{ fontSize: 30 }}>
                    cases: {cases}
                    {'\n'}
                    deaths: {deaths}
                    {'\n'}
                    tests: {tests}
                    {'\n'}
                    recovered: {recovered}
                    {'\n'}
                    today's cases: {todayCases}
                    {'\n'}
                    today's deaths: {todayDeaths}
                    {'\n'}
                </Text>
                </View>
            </Overlay>
        </>
    );
};

const styles = StyleSheet.create({
    title: {
        textDecorationLine: 'underline',
        fontSize: 30,
    },
});

export default CoronaScreen;
