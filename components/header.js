import React, { Component } from 'react';
import { Header, Title, Button, Left, Right, Body, Icon } from 'native-base';

export default class HeaderContent extends Component {
    render() {
        return (
            <Header>
                <Left>
                    <Button transparent>
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