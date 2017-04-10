import React, { Component } from 'react';
import { Text, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { Container, Content, List, ListItem, Icon, Left, Body } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class Sidebar extends Component {
    render() {
        let image = require('../img/image.png');

        return (
            <Container>
                <Content style={{ backgroundColor: '#ffffff' }}>
                    <Image style={{width: 260, height: 170}} source={image}/>
                    <List>
                        <ListItem>
                            <Left>
                                <Icon name="person" style={{ color: '#0A69FE' }} />
                                <Text style={styles.menu}>Profile</Text>
                            </Left>
                            <Body />
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Icon name="md-add-circle" style={{ color: '#0A69FE' }} />
                                <Text style={styles.menu}>Add News</Text>
                            </Left>
                            <Body />
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Icon name="md-list" style={{ color: '#0A69FE' }} />
                                <Text style={styles.menu}>Category</Text>
                            </Left>
                            <Body />
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Icon name="md-help-circle" style={{ color: '#0A69FE' }} />
                                <Text style={styles.menu}>Help</Text>
                            </Left>
                            <Body />
                        </ListItem>
                        <ListItem onPress={Actions.setting}>
                            <Left>
                                <Icon name="settings" style={{ color: '#0A69FE' }} />
                                <Text style={styles.menu}>Settings</Text>
                            </Left>
                            <Body />
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Icon name="md-log-out" style={{ color: '#0A69FE' }} />
                                <Text style={styles.menu}>Logout</Text>
                            </Left>
                            <Body />
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    menu: {
        paddingLeft: 15
    }
});