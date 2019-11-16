import React from "react";

import { View, Text } from "react-native";
import { Button, withTheme } from 'react-native-elements';
import { NavigationContainerProps } from "react-navigation"

export default class Success extends React.Component<NavigationContainerProps<{}>> {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#00CC66", alignItems: 'center', flexDirection: 'row' }}>
                <View style={{ display: 'flex', flexDirection: 'column',  alignItems: 'center', width: '100%'}}>
                    <Text style={{ textAlign: 'center', fontSize: 30 }}>Success</Text>
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
