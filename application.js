import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import App from './app';
import Detail from './detail';

export default class Application extends Component {
    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene key="app" component={App} initial={true} hideNavBar={true}/>
                    <Scene key="detail" component={Detail} hideNavBar={true}/>
                </Scene>
            </Router>
        );
    }
}