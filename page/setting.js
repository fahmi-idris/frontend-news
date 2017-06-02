import React, { Component } from 'react';
import { AppRegistry, ScrollView, Text, TouchableOpacity } from 'react-native';
import { Container, Content, List, ListItem, Header, Left, Icon, Body, Title ,Right } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class Setting extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <TouchableOpacity
                            style={{padding: 10}}
                            onPress={() => Actions.pop()}>
                        <Icon name="md-arrow-back" style={{ color: '#ffffff' }}/>
                        </TouchableOpacity>
                    </Left>
                    <Body>
                        <Title>Setting</Title>
                    </Body>
                    <Right />
                </Header>
                <ScrollView>
                    <Content>
                        <List>
                            <ListItem >
                                <Text>Setting a</Text>
                            </ListItem>
                            <ListItem>
                                <Text>Setting b</Text>
                            </ListItem>
                            <ListItem>
                                <Text>Setting c</Text>
                            </ListItem>
                        </List>
                    </Content>
                </ScrollView>
            </Container>
        );
    }
}