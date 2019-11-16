import React from "react";

import { View, StyleSheet } from "react-native";
import { NavigationContainerProps } from "react-navigation";
import Course from "../components/course";

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#222222'
  },
})

export default class BurnoutCourse extends React.Component<NavigationContainerProps<{}>, {}> {
  render() {
    return (
      <View style={[styles.page, { flex: 1, marginTop: 30 }]}>
        <Course category="Burnout" title="Introduction to burnout" progressionPercent="20%" progressionString="2/10" />
        <Course category="Burnout" title="Burnout: Symptoms and indicators" progressionPercent="0%" progressionString="0/10" />
      </View>
    );
  }
}