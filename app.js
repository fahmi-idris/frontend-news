import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Container, Tab, Tabs, Button, Icon, Header, Title, Left, Right, Body } from 'native-base';
import Drawer from 'react-native-drawer'

import Sidebar from './components/sidebar';
import ContentCard from './components/contentcard';

export default class App extends Component {
    constructor(){
        super();
        this.closeControlPanel = this.closeControlPanel.bind(this);
        this.openControlPanel = this.openControlPanel.bind(this);
    }

    closeControlPanel = () => {
        this._drawer.close()
    };
    openControlPanel = () => {
        this._drawer.open()
    };

    render() {
        return (
            <Drawer
              type="overlay"
              content={<Sidebar/>}
              tapToClose={true}
              openDrawerOffset={0.2}
              panCloseMask={0.2}
              closedDrawerOffset={-3}
              styles={drawerStyles}
              tweenHandler={(ratio) => ({
                main: { opacity:(2-ratio)/2 }
              })}
              ref={(ref) => this._drawer = ref}
              >
                <Container>
                    <Header>
                        <Left>
                            <Button transparent onPress={() => this.openControlPanel()}>
                                <Icon name='menu'/>
                            </Button>
                        </Left>
                        <Body>
                            <Title>Code News</Title>
                        </Body>
                        <Right />
                    </Header>
                    <Tabs>
                        <Tab heading="Next Web">
                            <ScrollView>
                                <ContentCard/>
                            </ScrollView>
                        </Tab>
                        <Tab heading="Recode">
                            <ScrollView>
                                <ContentCard/>
                            </ScrollView>
                        </Tab>
                    </Tabs>
                </Container>
            </Drawer>
        );
    }
}

const drawerStyles = {
    drawer: { 
        shadowColor: '#000000',
        shadowOpacity: 0.8,
        shadowRadius: 3
    },
    main: {
        paddingLeft: 1
    },
}