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
        messages: [] as Message[],
    }

    componentDidMount = () => {
        this.init();
    }

    init = async () => {
        await DF.subscribe(this.state.session, (data) => {
            let msgSplits = data.message.split('|');
            // actual reply from bot
            let text = msgSplits[0];
            // comment from our App
            let comment = msgSplits[1];
            // label indicating this message is SUCCESS, WARNING, ERROR
            let messageLabel = msgSplits[2];
            // label indicating this whole conversation is SUCCEED, IN_PROGRESS or FAILED
            let conversationLabel = msgSplits[3];

            this.setState(previousState => ({
                messages: GiftedChat.append(previousState.messages, [
                    {
                        _id: uuidv4(),
                        text: text,
                        createdAt: new Date(),
                        user: {
                            _id: 2,
                            name: 'Kevin',
                            avatar: 'https://placeimg.com/140/140/any',
                        }
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