import React from "react";

import { View, Text } from "react-native";
import { Button } from 'react-native-elements';
import { NavigationContainerProps } from "react-navigation"

export interface FailureProps {
    nextScreen?: string | undefined,
}

export default class Failure extends React.Component<FailureProps & NavigationContainerProps<{}>> {
    render() {
        const nextScreen = typeof this.props.nextScreen !== "undefined" ? this.props.nextScreen : "Home"

        return (
            <View style={{ flex: 1, backgroundColor: "#FF0000", alignItems: 'center', flexDirection: 'row' }}>
                <View style={{ display: 'flex', flexDirection: 'column',  alignItems: 'center', width: '100%'}}>
                    <Text style={{ textAlign: 'center', fontSize: 30 }}>Failure</Text>
                    <Button
                        title="Try Again"
                        buttonStyle={{ marginTop: 10 }}
                        onPress={() => this.props.navigation!.navigate(nextScreen)}
                    />
                </View>
            </View >
        );
    }
}
