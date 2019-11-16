import React from "react";

import { Image, View } from "react-native";
import { NavigationContainerProps } from "react-navigation"

export interface LogoProps {

}

export default class Logo extends React.Component<LogoProps & NavigationContainerProps<{}>, {}> {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image
            style={{width: 50, height: 50}}
            source={require('../../assets/logo.png')} />
        </View>
      );
    }
  }