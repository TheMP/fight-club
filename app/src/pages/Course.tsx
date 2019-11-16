import React from "react";

import { View, Text, Button } from "react-native";
import { NavigationContainerProps } from "react-navigation"

export interface DepressionCourseProps {

}

export default class DepressionCourse extends React.Component<DepressionCourseProps & NavigationContainerProps<{}>, {}> {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Mental Health: Intro</Text>
          <Text>Recognizing depression and how to act</Text>
          <Text>Helping during the professional transition</Text>
        </View>
      );
    }
  }