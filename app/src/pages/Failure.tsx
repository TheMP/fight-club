import React from "react";

import { View, Text } from "react-native";
import { Button, withTheme } from 'react-native-elements';
import { NavigationContainerProps } from "react-navigation"

export default class Failure extends React.Component<NavigationContainerProps<{}>> {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#FF0000", alignItems: 'center', flexDirection: 'row' }}>
                <View style={{ display: 'flex', flexDirection: 'column',  alignItems: 'center', width: '100%'}}>
                    <Text style={{ textAlign: 'center', fontSize: 30 }}>Failure</Text>
                    <Button
                        title="Home"
                        buttonStyle={{ marginTop: 10 }}
                        onPress={() => this.props.navigation!.navigate('Home')}
                    />
                </View>
            </View >
        );
    }
}
