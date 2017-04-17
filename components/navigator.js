import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Left, Right, Body, Icon, Header, Title  } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class Navigator extends Component {
    render() {
        return (
            <Header>
                <Left>
                    <TouchableOpacity
                        style={{padding: 10}}
                        onPress={() => Actions.pop()}>
                    <Icon name="md-arrow-back" style={{ color: '#ffffff' }}/>
                    </TouchableOpacity>
                </Left>
                <Body>
                    <Title>Detail Title</Title>
                </Body>
                <Right />
            </Header>
        );
    }
}