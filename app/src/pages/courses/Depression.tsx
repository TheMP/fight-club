import React from "react";

import { View, TouchableHighlight, StyleSheet } from "react-native";
import { NavigationContainerProps } from "react-navigation"

import Class from "../components/class";

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
          <View style={[styles.page, { flex: 1, paddingTop: 30 }]}>
            <Class category="Depression" title="Introduction to depression" icon="book" completed={true}  />
            <Class category="Depression" title="Depression: Symptoms and indicators" icon="book" completed={true}  />
            <TouchableHighlight onPress={() => this.props.navigation!.navigate('Chat')}>
              <Class category="Depression" title="Learn how to communicate" icon="comments" completed={false} />
            </TouchableHighlight>
          </View>
      );
    }
  }