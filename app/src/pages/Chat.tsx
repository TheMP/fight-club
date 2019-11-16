import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
const uuidv4 = require('uuid/v4');
import { Message } from "../models/Chat";
import { sendMessage } from "../services/api";
import * as DF from "../services/pusher";

const userAvater = require("../../assets/marek.png");

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
        DF.subscribe("df-response", (data) => {
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
    }

    onSend = (messages = [] as Message[]) => {
        sendMessage(messages[0].text);
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }))
    }

    render() {
        return (
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
        )
    }
}