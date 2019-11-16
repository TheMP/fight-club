import React from "react";

import { View, Text, Button } from "react-native";
import { NavigationContainerProps } from "react-navigation"

export interface DepressionCourseProps {

}

export default class DepressionCourse extends React.Component<DepressionCourseProps & NavigationContainerProps<{}>, {}> {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Depression: An introduction</Text>
          <Text>Recognize Symptoms of depression</Text>
          <Text>How to talk to a depressed person</Text>
        </View>
      );
    }
  }