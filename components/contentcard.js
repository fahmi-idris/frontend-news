import React, { Component } from 'react';
import { Text, Image, TouchableHighlight } from 'react-native';
import { Thumbnail, Content, H3, Card, CardItem, Button, Left, Right, Body, Icon, Toast } from 'native-base';
import { Actions } from 'react-native-router-flux';
import moment from 'moment';

export default class ContentCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        let REQUEST_URL = 'https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=67130e96dab745bf91d4a94539a24b01';

        fetch(REQUEST_URL)
        .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    data: responseData.articles[0]
            });
        }).done();
    }

    render() {
        let thumbnail    = require('../img/logo-f.png');
        let publishDate  = moment(this.state.data.publishedAt).format('DD MMMM YYYY');
        let relativeTime = moment(this.state.data.publishedAt, "YYYYMMDD").fromNow();
        
        if(this.state.data) {
            return (
                <Content>
                    <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={thumbnail} />
                                <Body>
                                    <Text>{ this.state.data.author }</Text>
                                    <Text note>
                                        { publishDate }
                                    </Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem cardBody>
                            <TouchableHighlight onPress={Actions.detail}>
                                <Image style={{width: 320, height: 170}} source={{ uri: this.state.data.urlToImage }}/>
                            </TouchableHighlight>
                        </CardItem>
                        <CardItem>
                            <H3>{ this.state.data.title }</H3>
                        </CardItem>
                        <CardItem content style={{ paddingTop: 0 }}>
                            <Text>
                                { this.state.data.description }
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
                            <Text>{ relativeTime }</Text>
                        </CardItem>
                    </Card>
                </Content>
            );
        } else {
            <Content>
                <Text>Loading</Text>
            </Content>
        }
    }
}