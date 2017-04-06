import React, { Component } from 'react';
import { Header, Title, Button, Toast, Left, Right, Body, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class HeaderContent extends Component {
    render() {
        return (
            <Header>
                <Left>
                    <Button transparent onPress={()=> Toast.show({
                            text: 'Hamburger menu is pressed',
                            position: 'bottom',
                            buttonText: 'Ok'
                        })}>
                        <Icon name='menu'/>
                    </Button>
                </Left>
                <Body>
                    <Title>Frontend News</Title>
                </Body>
                <Right />
            </Header>
        );
    }
}