import React from "react";

import { View, Text, Button } from "react-native";
import { NavigationContainerProps } from "react-navigation"

export interface HomeProps {

}

export default class HomeScreen extends React.Component<HomeProps & NavigationContainerProps<{}>, {}> {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
          <Button
          title="Go to Details"
          onPress={() => (this.props.navigation!).navigate('Chat')}
        />
        </View>
      );
    }
  }