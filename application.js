import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import App from './app';
import Detail from './detail';
import Setting from './setting';
import SplashScreen from 'react-native-splash-screen';

export default class Application extends Component {

    componentDidMount() {
        SplashScreen.hide();
    }

    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene key="app" component={App} initial={true} hideNavBar={true}/>
                    <Scene key="detail" component={Detail} hideNavBar={true}/>
                    <Scene key="setting" component={Setting} hideNavBar={true}/>
                </Scene>
            </Router>
        );
    }
}