import React, { Component } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { Content, Form, Item, Input, Label, Button, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class Login extends Component {

    render() {
    	let background = require('../img/login.jpg');
    	let logo = require('../img/code_logo.png');
        return (
            <View style={styles.container}>
            	<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            		<Image source={background} style={styles.backgroundImage}>
                		<Image source={logo} style={styles.logoStyle}/>
                	</Image>
                </View>
                <View style={[ styles.bgBlue, { flex: 1, alignItems: 'center', justifyContent: 'center' } ]}>
                	<Content style={{ width: '75%', paddingTop: 30 }}>
                        <Form>
                            <Item regular>
                            	<Icon active name="person" style={{color: "white"}}/>
                                <Input style={{color: "white"}} placeholder='Username' placeholderTextColor="white"/>
                            </Item>
                            <Item regular>
                            	<Icon active name="lock" style={{color: "white"}}/>
                                <Input style={{color: "white"}} placeholder='Password' placeholderTextColor="white" secureTextEntry={true}/>
                            </Item>
                            <Button full rounded transparent style={{ marginTop: 35, borderColor: '#ffffff', borderWidth: 1, }} onPress={Actions.home}>
                            	<Text style={styles.textWhite}>Login</Text>
                            </Button>
                        </Form>
                    </Content>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
	container: {
	     flex: 1,
	     justifyContent: 'space-between',
	     flexDirection: 'column',
	},
	bgBlue: {
		backgroundColor: '#3a8aff',
	},
    backgroundImage: {
		flex: 1,
		alignItems: 'center',
		resizeMode: 'cover',
		alignItems: 'center',
		justifyContent: 'center'
	},
	textWhite: {
		color: '#ffffff'
	},
	logoStyle: {
		width: 150,
		height: 150
	}
});