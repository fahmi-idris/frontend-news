import React, { Component } from 'react';
import { Text, Image, TouchableHighlight } from 'react-native';
import { Thumbnail, Content, H3, Card, CardItem, Button, Left, Right, Body, Icon, Toast } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class ContentCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showToast: false
        }
    }

    render() {
        let thumbnail = require('../img/logo-f.png');
        let image = require('../img/image.png');

        return (
            <Content>
                <Card>
                    <CardItem>
                        <Left>
                            <Thumbnail source={thumbnail} />
                            <Body>
                                <Text>React Native</Text>
                                <Text note>Fahmi Idris</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem cardBody>
                        <TouchableHighlight onPress={Actions.detail}>
                            <Image style={{width: 320, height: 170}} source={image}/>
                        </TouchableHighlight>
                    </CardItem>
                    <CardItem>
                        <H3>React Native app is a real mobile app</H3>
                    </CardItem>
                    <CardItem content style={{ paddingTop: 0 }}>
                        <Text>
                            Wait a minute. Wait a minute, Doc. Uhhh...
                            Are you telling me that you built a time machine... out of a DeLorean?!
                            Whoa. This is heavy.
                        </Text>
                    </CardItem>
                    <CardItem style={{ justifyContent: 'space-around' }}>
                        <Button transparent 
                            onPress={()=> Toast.show({
                            text: 'Likes button is pressed',
                            position: 'bottom',
                            buttonText: 'Ok'
                        })}>
                            <Icon active name="thumbs-up" />
                            <Text>10 Likes</Text>
                        </Button>
                        <Button transparent 
                        onPress={()=> Toast.show({
                            text: 'Comments button is pressed',
                            position: 'bottom',
                            buttonText: 'Ok'
                        })}>
                            <Icon active name="chatbubbles" />
                            <Text>10 Comments</Text>
                        </Button>
                        <Text>1h ago</Text>
                    </CardItem>
                </Card>
            </Content>
        );
    }
}