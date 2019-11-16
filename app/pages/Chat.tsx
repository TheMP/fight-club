import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
const uuidv4 = require('uuid/v4');
import { Message } from "../models/Chat";
import { View, KeyboardAvoidingView, Platform, Text } from 'react-native';
import Pusher from "pusher-js/react-native";

interface ChatState {
    messages: Message[];
}

export default class Chat extends React.Component<{}, ChatState> {
    state = {
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

    componentDidMount() {
        Pusher.logToConsole = true;

        var pusher = new Pusher('758a9c9ca125f8a1d2a6', {
            cluster: 'eu',
            forceTLS: true
        });

        var channel = pusher.subscribe('my-channel');
        channel.bind('my-event', (data: any) => {
            this.setState(previousState => ({
                messages: GiftedChat.append(previousState.messages, [
                    {
                        _id: uuidv4(),
                        text: data.message,
                        createdAt: new Date(),
                    },
                ]),
            }))
        });
    }

    onSend(messages = [] as Message[]) {
        fetch('http://localhost:5000/message', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                message: messages[0].text,
            }),
        });
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }))
    }

    render() {
        return (
            <GiftedChat
                showUserAvatar={true}
                messages={this.state.messages}
                onSend={messages => this.onSend(messages)}
                user={{
                    _id: 1,
                    name: "Marek",
                    avatar: require("../assets/marek.png")
                }}
            />
        )
    }
}