import React, { Component } from 'react';
import { AppRegistry, ScrollView } from 'react-native';
import { Container, Drawer, Tab, Tabs } from 'native-base';
import ContentCard from './components/contentcard';
import HeaderContent from './components/header';

export default class MyApps extends Component {
    render() {
        return (
            <Container>
                <HeaderContent/>
                <Tabs>
                    <Tab heading="React Native">
                        <ScrollView>
                            <ContentCard/>
                            <ContentCard/>
                            <ContentCard/>
                            <ContentCard/>
                        </ScrollView>
                    </Tab>
                    <Tab heading="Vue JS">
                        <ScrollView>
                            <ContentCard/>
                            <ContentCard/>
                            <ContentCard/>
                        </ScrollView>
                    </Tab>
                    <Tab heading="React">
                        <ScrollView>
                            <ContentCard/>
                            <ContentCard/>
                        </ScrollView>
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}

AppRegistry.registerComponent('MyApps', () => MyApps);