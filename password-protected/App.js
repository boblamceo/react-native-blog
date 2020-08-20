import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { setNavigator } from './navigationRef';
import CoronaScreen from './Coronavirus/CoronaScreen';
import Welcome from './screens/projects/Welcome';

const switchNavigator = createSwitchNavigator({
    Welcome,
    Corona: CoronaScreen,
});

const App = createAppContainer(switchNavigator);

export default () => {
    return (
        <App
            ref={(navigator) => {
                setNavigator(navigator);
            }}
        />
    );
};
