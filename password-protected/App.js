import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { setNavigator } from './navigationRef';
import AuthScreen from './screens/AuthScreen';
import MainScreen from './screens/MainScreen';
import ChooseScreen from './screens/projects/ChooseScreen';
import PassScreen from './screens/projects/PassScreen';
import QuizScreen from './screens/QuizScreen';
import RightScreen from './screens/RightScreen';
import WrongScreen from './screens/WrongScreen';

const switchNavigator = createSwitchNavigator({
    AuthScreen,
    MainStuff: createBottomTabNavigator({
        MainScreen,
        QuestionScreen: createSwitchNavigator({
            QuizScreen,
            WrongScreen,
            RightScreen,
            Projects: createStackNavigator({
                ChooseScreen,
                PassScreen,
            }),
        }),
    }),
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
