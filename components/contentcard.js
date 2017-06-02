import React, { Component } from 'react';
import { Text, Image, TouchableHighlight, View } from 'react-native';
import { Thumbnail, Content, H3, Card, CardItem, Button, Left, Right, Body, Icon, Toast } from 'native-base';
import { Actions } from 'react-native-router-flux';
import moment from 'moment';

export default class ContentCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            recode: []
        }
    }

    componentDidMount() {
        this.fetchData();
        this.fetchDataRecode();
    }

    fetchData() {
        let REQUEST_URL = 'http://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=67130e96dab745bf91d4a94539a24b01';

        fetch(REQUEST_URL)
        .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    data: responseData.articles
                });
            })
        .done();
    }

    fetchDataRecode() {
        let REQUEST_URL = 'http://newsapi.org/v1/articles?source=recode&sortBy=top&apiKey=67130e96dab745bf91d4a94539a24b01';

        fetch(REQUEST_URL)
        .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    recode: responseData.articles
                });
            })
        .done();
    }

    renderList(){
        let thumbnail    = require('../img/logo-f.png');
        if(this.props.category == 'nextweb') {
            return this.state.data.map((item, index) => (
                <Content key={index}>
                    <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={thumbnail} />
                                <Body>
                                    <Text>{ item.author }</Text>
                                    <Text note>
                                        { moment(item.publishedAt).format('DD MMMM YYYY') }
                                    </Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem cardBody>
                            <TouchableHighlight onPress={Actions.detail}>
                                <Image style={{width: 320, height: 170}} source={{ uri: item.urlToImage }}/>
                            </TouchableHighlight>
                        </CardItem>
                        <CardItem>
                            <H3>{ item.title }</H3>
                        </CardItem>
                        <CardItem content style={{ paddingTop: 0 }}>
                            <Text>
                                { item.description }
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
                            <Text>{ moment(item.publishedAt, "YYYYMMDD").fromNow() }</Text>
                        </CardItem>
                    </Card>
                </Content>
            ));
        } else {
            return this.state.recode.map((item, index) => (
                <Content key={index}>
                    <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={thumbnail} />
                                <Body>
                                    <Text>{ item.author }</Text>
                                    <Text note>
                                        { moment(item.publishedAt).format('DD MMMM YYYY') }
                                    </Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem cardBody>
                            <TouchableHighlight onPress={Actions.detail}>
                                <Image style={{width: 320, height: 170}} source={{ uri: item.urlToImage }}/>
                            </TouchableHighlight>
                        </CardItem>
                        <CardItem>
                            <H3>{ item.title }</H3>
                        </CardItem>
                        <CardItem content style={{ paddingTop: 0 }}>
                            <Text>
                                { item.description }
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
                            <Text>{ moment(item.publishedAt, "YYYYMMDD").fromNow() }</Text>
                        </CardItem>
                    </Card>
                </Content>
            ));
        }
    }

    render() {
        return(
            <View>
                { this.renderList() }
            </View>
        );
    }
}