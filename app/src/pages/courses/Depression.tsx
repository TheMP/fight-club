import React from "react";

import { View, TouchableHighlight, StyleSheet } from "react-native";
import { NavigationContainerProps } from "react-navigation"

import Course from "../components/course";

export interface DepressionCourseProps {

}

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#222222'
  },
})

export default class DepressionCourse extends React.Component<DepressionCourseProps & NavigationContainerProps<{}>, {}> {
    render() {
      return (
          <View style={[styles.page, { flex: 1, marginTop: 30 }]}>
            <Course category="Depression" title="Introduction to depression" progressionPercent="100%" progressionString="10/10" />
            <Course category="Depression" title="Depression: Symptoms and indicators" progressionPercent="100%" progressionString="10/10" />
            <TouchableHighlight onPress={() => this.props.navigation!.navigate('Chat')}>
              <Course category="Depression" title="Learn how to communicate" progressionPercent="0%" progressionString="0/10" />
            </TouchableHighlight>
          </View>
      );
    }
  }