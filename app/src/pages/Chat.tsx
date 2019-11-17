import React from 'react';
import * as _ from "lodash";
import { GiftedChat, SystemMessage } from 'react-native-gifted-chat';
import { Header } from "react-navigation-stack";
import { KeyboardAvoidingView, Platform, StatusBar, Text, View } from "react-native";
const uuidv4 = require('uuid/v4');
import { Message } from "../models/Chat";
import { Response } from "../models/Pusher";
import { sendMessage } from "../services/api";
import * as DF from "../services/pusher";
import { NavigationContainerProps } from "react-navigation"

const userAvater = require("../../assets/marek.png");
const kevinAvatar = require("../../assets/kevin.jpg");

interface ChatState {
    messages: Message[];
    ready: boolean;
    session: string;
    done: boolean;
}

export default class Chat extends React.Component<NavigationContainerProps<{ which: number }>, ChatState> {
    state = {
        ready: false,
        done: false,
        session: uuidv4(),
        messages: [] as Message[],
    }

    componentDidMount = () => {
        this.init();
    }

    init = async () => {
        await DF.subscribe(this.state.session, (data: Response) => {

            // actual reply from bot
            let text = data.message;
            // comment from our App
            let comment = data.comment;
            // label indicating this message is SUCCESS, WARNING, ERROR
            let messageLabel = data.messageLabel;
            // label indicating this whole conversation is SUCCEED, IN_PROGRESS or FAILED
            let conversationLabel = data.conversationLabel;

            console.log(data);

            if (conversationLabel === "SUCCEED") {
                this.setState({ done: true });
                setTimeout(() => this.props.navigation!.navigate('Success', { nextScreen: "Depression", stage: 3 }), 2000);
            }

            if (conversationLabel === "FAILED") {
                this.setState({ done: true });
                setTimeout(() => this.props.navigation!.navigate('Failure'), 5000);
            }

            let responses = [] as Message[];

            if (!_.isEmpty(comment)) {
                responses.push(
                    {
                        _id: uuidv4(),
                        text: comment!,
                        system: true,
                        createdAt: new Date(),
                        messageLabel
                    },
                )
            }

            if (!_.isEmpty(text)) {
                responses.push(
                    {
                        _id: uuidv4(),
                        text: text!,
                        createdAt: new Date(),
                        user: {
                            _id: 2,
                            name: 'Kevin',
                            avatar: kevinAvatar,
                        }
                    },
                )
            }

            this.setState(previousState => ({
                messages: GiftedChat.append(previousState.messages, responses),
            }));
        })

        const messages = [
            {
                _id: uuidv4(),
                text: this.props.navigation.state.params.which === 0 ? "Your friend seems to be quite silent for last few days. You are concerned about him and want to check up on him." : "Your friend is in a defensive mode and you are trying to find out why.",
                quickReplies: {
                    type: 'radio', // or 'checkbox',
                    keepIt: true,
                    values: [
                        {
                            title: 'Hello',
                            value: 'Hello',
                        },
                        {
                            title: 'Hi',
                            value: 'Hi',
                        }
                    ],
                },
                // system: true,
                createdAt: new Date(),
                messageLabel: "WARNING"
            }
        ]

        this.setState({ ready: true, messages });
    }

    onSend = (messages = [] as Message[]) => {
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }));
        sendMessage(this.state.session, messages[0].text, this.props.navigation.state.params.which);
    }

    onQuickReply = (replies: { value: string }[]) => {
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, [{
                _id: uuidv4(),
                text: replies[0].value,
                createdAt: new Date(),
                user: {
                    _id: 1,
                    name: "Marek",
                    avatar: userAvater
                }
            }]),
        }));
        sendMessage(this.state.session, replies[0].value, this.props.navigation.state.params.which);
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
                keyboardVerticalOffset={0} enabled={Platform.OS === 'android'} >
                <GiftedChat
                    showUserAvatar={true}
                    renderFooter={this.state.done ? () => null : undefined}
                    renderSystemMessage={(props) => {
                        const messageLabel = props.currentMessage.messageLabel;
                        return (
                            <SystemMessage
                                {...props}
                                containerStyle={{
                                    alignItems: "flex-end",
                                    paddingRight: 60
                                }}
                                textStyle={{
                                    color: messageLabel === "SUCCESS" ? 'green' : messageLabel === "WARNING" ? "orange" : "red",
                                    textAlign: 'right',
                                }}
                            />
                        );
                    }}
                    messages={this.state.messages}
                    onSend={this.onSend}
                    onQuickReply={this.onQuickReply}
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