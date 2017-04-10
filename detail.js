import React, { Component } from 'react';
import { AppRegistry, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import { Container, Thumbnail, Content, H3, List, ListItem, Card, CardItem, Button, Left, Right, Body, Icon, Header, Title, Toast  } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class Detail extends Component {
    render() {
        let image     = require('./img/image.png');
        let thumbnail = require('./img/logo-f.png');
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
                        <Title>Detail Title</Title>
                    </Body>
                    <Right />
                </Header>
                <ScrollView>
                    <Content>
                        <Card>
                            <CardItem cardBody>
                                <Image style={{width: 320, height: 170}} source={image}/>
                            </CardItem>
                            <CardItem>
                                <H3>React Native app is a real mobile app</H3>
                            </CardItem>
                            <CardItem content style={{ paddingTop: 0 }}>
                                <Text>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </Text>
                            </CardItem>
                            <CardItem content>
                                <Text>
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.
                                </Text>
                            </CardItem>
                            <CardItem content>
                                <Text>
                                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                                </Text>
                            </CardItem>
                            <CardItem content>
                                <Text>
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.
                                </Text>
                            </CardItem>
                            <CardItem content>
                                <Text>
                                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                                </Text>
                            </CardItem>
                            <CardItem content>
                                <Text>
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.
                                </Text>
                            </CardItem>
                            <CardItem content>
                                <Text>
                                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
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
                    <Content>
                        <List>
                            <ListItem>
                                <Thumbnail source={thumbnail}/>
                                <Body>
                                    <Text style={{ paddingLeft: 10 }}>Fahmi Idris</Text>
                                    <Text style={{ paddingLeft: 10 }} note>Doing what you like will always keep you happy . .</Text>
                                </Body>
                            </ListItem>
                            <ListItem>
                                <Thumbnail source={thumbnail}/>
                                <Body>
                                    <Text style={{ paddingLeft: 10 }}>Fahmi Idris</Text>
                                    <Text style={{ paddingLeft: 10 }} note>Life is one time offer! Use it well</Text>
                                </Body>
                            </ListItem>
                        </List>
                    </Content>
                </ScrollView>
            </Container>
        );
    }
}