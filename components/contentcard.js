import React, { Component } from 'react';
import { Text, Image } from 'react-native';
import { Thumbnail, Content, Card, CardItem, Button, Left, Right, Body, Icon } from 'native-base';

export default class ContentCard extends Component {
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
                        <Image style={{width: 320, height: 170}} source={image}/>
                    </CardItem>
                    <CardItem content>
                        <Text>
                            Wait a minute. Wait a minute, Doc. Uhhh...
                            Are you telling me that you built a time machine... out of a DeLorean?!
                            Whoa. This is heavy.
                        </Text>
                    </CardItem>
                    <CardItem style={{ justifyContent: 'space-around' }}>
                        <Button transparent>
                            <Icon active name="thumbs-up" />
                            <Text>10 Likes</Text>
                        </Button>
                        <Button transparent>
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