import React, { Component } from 'react';
import { Router, Scene, ActionConst } from 'react-native-router-flux';

import Home from '../page/home';
import Detail from '../page/detail';
import Setting from '../page/setting';
import Login from '../page/login';
import SplashScreen from 'react-native-splash-screen';

export default class Application extends Component {

    componentDidMount() {
        SplashScreen.hide();
    }

    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene key="login" component={Login} initial={true} hideNavBar={true} type={ActionConst.REPLACE}/>
                    <Scene key="home" component={Home} hideNavBar={true} direction="vertical"/>
                    <Scene key="detail" component={Detail} hideNavBar={true}/>
                    <Scene key="setting" component={Setting} hideNavBar={true}/>
                </Scene>
            </Router>
        );
    }
}