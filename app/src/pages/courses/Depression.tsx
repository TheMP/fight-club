import React from "react";

import { View, TouchableHighlight, StyleSheet } from "react-native";
import { NavigationContainerProps } from "react-navigation"

import Class from "../components/class";

export interface DepressionCourseProps {
  stage: number;
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#222222'
  },
})
//this.props.navigation!.navigate('Chat')}>

export default class DepressionCourse extends React.Component<NavigationContainerProps<DepressionCourseProps>, {}> {
    render() {
      const props = this.props.navigation? this.props.navigation.state.params : {}
      return (
          <View style={[styles.page, { flex: 1, paddingTop: 30 }]}>
            <Class category="Depression" title="Introduction to depression" icon="book" completed={true}  />
            <Class category="Depression" title="Depression: Symptoms and indicators" icon="book" completed={true}  />
            <TouchableHighlight onPress={() => this.props.navigation!.navigate('Chat', { which: 0})} >
              <Class 
                category="Depression" 
                title="Learn how to communicate" 
                icon="comments" 
                completed={props.stage >= 3 ? true : false} />
            </TouchableHighlight>
          </View>
      );
    }
  }