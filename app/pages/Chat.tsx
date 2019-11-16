import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { Message } from "../models/Chat";
import { View, KeyboardAvoidingView, Platform, Text } from 'react-native';
import Pusher from "pusher-js/react-native";

interface ChatState {
    messages: Message[];
}

export default class Chat extends React.Component<{}, ChatState> {
    state = {
        messages: [] as Message[],
    }

    componentWillMount() {
        console.log("ere");
        this.setState({
            messages: [
                {
                    _id: 1,
                    text: 'Hello developer',
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'React Native',
                        avatar: 'https://placeimg.com/140/140/any',
                    },
                },
            ],
        });

        Pusher.logToConsole = true;

        var pusher = new Pusher('758a9c9ca125f8a1d2a6', {
            cluster: 'eu',
            forceTLS: true
        });

        var channel = pusher.subscribe('my-channel');
        channel.bind('my-event', function (data: any) {
            console.log(JSON.stringify(data));
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
                firstParam: 'yourValue',
                secondParam: 'yourOtherValue',
            }),
        });
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }))
    }

    render() {
        return (
            <GiftedChat
                messages={this.state.messages}
                onSend={messages => this.onSend(messages)}
                user={{
                    _id: 1,
                }}
            />
        )
    }
}