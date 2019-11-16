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

export default class Chat extends React.Component<NavigationContainerProps<{}>, ChatState> {
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
                this.setState({done: true});
                setTimeout(() => this.props.navigation!.navigate('Success'), 5000);
            }

            if (conversationLabel === "FAILED") {
                this.setState({done: true});
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