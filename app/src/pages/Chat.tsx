import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { Header } from "react-navigation-stack";
import { KeyboardAvoidingView, Platform, StatusBar, Text, View } from "react-native";
const uuidv4 = require('uuid/v4');
import { Message } from "../models/Chat";
import { sendMessage } from "../services/api";
import * as DF from "../services/pusher";

const userAvater = require("../../assets/marek.png");

interface ChatState {
    messages: Message[];
    ready: boolean;
    session: string;
}

export default class Chat extends React.Component<{}, ChatState> {
    state = {
        ready: false,
        session: uuidv4(),
        messages: [
            {
                _id: uuidv4(),
                text: 'Hello developer',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },
        ],
    }

    componentDidMount = () => {
        this.init();
    }

    init = async () => {
        await DF.subscribe(this.state.session, (data) => {
            this.setState(previousState => ({
                messages: GiftedChat.append(previousState.messages, [
                    {
                        _id: uuidv4(),
                        text: data.message,
                        createdAt: new Date(),
                    },
                ]),
            }));
        })

        this.setState({ready: true});
    }

    onSend = (messages = [] as Message[]) => {
        sendMessage(this.state.session, messages[0].text);
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }))
    }

    render() {
        if (!this.state.ready) {
            return (
                <View>
                    <Text>Waiting...</Text>
                </View>
            )
        }
        return (
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={"padding"}
                keyboardVerticalOffset={Header.HEIGHT + (StatusBar.currentHeight || 0)} enabled={Platform.OS === 'android'} >
                <GiftedChat
                    showUserAvatar={true}
                    messages={this.state.messages}
                    onSend={this.onSend}
                    user={{
                        _id: 1,
                        name: "Marek",
                        avatar: userAvater
                    }}
                />
            </KeyboardAvoidingView>
        )
    }
}