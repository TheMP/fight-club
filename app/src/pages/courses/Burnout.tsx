import React from "react";

import { View, StyleSheet, TouchableHighlight } from "react-native";
import { NavigationContainerProps } from "react-navigation";
import Class from "../components/class";

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#222222'
  },
})

export default class BurnoutCourse extends React.Component<NavigationContainerProps<{}>, {}> {
  render() {
    return (
      <View style={[styles.page, { flex: 1, paddingTop: 30 }]}>
        <Class category="Burnout" title="Introduction to burnout" icon="book" completed={true} />
        <Class category="Burnout" title="Burnout: Symptoms and indicators" icon="book" completed={false} />
        <Class category="Burnout" title="Burnout: Symptoms and indicators" icon="book" completed={false} />
        <TouchableHighlight onPress={() => this.props.navigation!.navigate('Chat', { which: 1 })} >
          <Class
            category="Burnout"
            title="Burnout: Symptoms and indicators"
            icon="comments"
            completed={false} />
        </TouchableHighlight>
      </View>
    );
  }
}