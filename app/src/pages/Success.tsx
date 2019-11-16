import React from "react";

import { View, Text } from "react-native";

export default class Success extends React.Component<{}> {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#00CC66", alignItems: 'center', flexDirection: 'row'}}>
                <Text style={{ textAlign: 'center', width: '100%', fontSize: 30  }}>Success</Text>
            </View >
        );
    }
}
