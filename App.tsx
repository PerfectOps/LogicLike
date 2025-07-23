import React, {Component} from 'react';
import MainScreen from './src/screens/MainScreen';
import { StatusBar } from 'react-native';

export default class App extends Component {
    render() {
        return (
            <>
                <StatusBar barStyle={'default'} />
                <MainScreen />
            </>
        );
    }
}
