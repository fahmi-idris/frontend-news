import React, { Component } from 'react';
import { StyleSheet, TouchableHighlight, Text } from 'react-native';


export default class Button extends Component {
	constructor(){
	    super();
	    this.state = {
	        background: '#000',
	        number: 1
	    };

	    this._onPressButton = this._onPressButton.bind(this);
	}

    _onPressButton(){
        this.setState({
            number: this.state.number + 1
        });
    }

    render() {
        return (
    	    <TouchableHighlight 
                onPress={() => this._onPressButton()}
                style={[styles.container, {backgroundColor: this.state.background}]}>
	           <Text style={styles.buttonText}>
	               {this.state.number}
	           </Text>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        height: 50,
        width: 200,
        marginBottom: 5,
        alignItems: 'center'
    },
    buttonText:{
        color: '#fff'
    }
});