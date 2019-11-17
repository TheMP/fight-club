import React from "react";

import { View, Text } from "react-native";
import { Button, withTheme } from 'react-native-elements';
import { NavigationContainerProps } from "react-navigation"

export interface SuccessProps {
    nextScreen?: string | undefined,
    stage?: number | undefined,
}

export default class Success extends React.Component<NavigationContainerProps<SuccessProps>> {
    performTimeConsumingTask = async() => {
        return new Promise((resolve) =>
          setTimeout(
            () => { resolve('result') },
            2000
          )
        );
    }
    
    async componentDidMount() {
        // Preload data from an external API
        // Preload data using AsyncStorage
        const data = await this.performTimeConsumingTask();
        const props = this.props.navigation? this.props.navigation.state.params : {}
        const nextScreen = (typeof props.nextScreen !== "undefined" && props.nextScreen !== null) ? props.nextScreen : "Home"
        const propsNavigate = typeof props.stage !== "undefined" ? { stage: props.stage} : {}
        console.log(nextScreen)
        if (data !== null) {
            this.props.navigation!.navigate(nextScreen, propsNavigate);
        }
    }
    
    render() {
        

        return (
            <View style={{ flex: 1, backgroundColor: "#00CC66", alignItems: 'center', flexDirection: 'row' }}>
                <View style={{ display: 'flex', flexDirection: 'column',  alignItems: 'center', width: '100%'}}>
                    <Text style={{ textAlign: 'center', fontSize: 30 }}>Success</Text>
                </View>
            </View >
        );
    }
}
