import React from "react";

import { Animated, View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { NavigationContainerProps } from "react-navigation"

export interface CourseProps {
    category: string;
    title: string;
    progressionString: string;
    progressionPercent: string;
}

const styles = StyleSheet.create({
  topContainer: {
    margin: 10,
  },
  course: {
    width: "100%",
    backgroundColor: '#444444',
    padding: 20,
    borderRadius: 10,
    flexDirection: 'column',
  },
  courseCategory: {
    color: "orange",
    fontSize: 14,
  },
  courseName: {
    color: "white",
    fontSize: 20,
  },
  courseProgression: {
    fontSize: 13,
    color: "whitesmoke",
  },
  progressBar: {
    height: 22,
    marginTop: 3,
    width: '100%',
    backgroundColor: "whitesmoke",
  },
})

export default class Course extends React.Component<CourseProps & NavigationContainerProps<{}>, {}> {
  render() {
    return (
        <View style={styles.topContainer}>
            <View style={styles.course}>
                <View>
                    <Text style={styles.courseCategory}>{this.props.category}</Text>
                </View>
                <View>
                    <Text style={styles.courseName}>{this.props.title}</Text>
                </View>
                <View style={{marginTop: 10}}>
                    <Text style={styles.courseProgression}>Course Progression</Text>
                <View style={styles.progressBar}>
                    <Animated.View style={[StyleSheet.absoluteFill, {backgroundColor: "darkseagreen", width: this.props.progressionPercent }]}/>
                    <Text style={[StyleSheet.absoluteFill, {textAlign: 'right', marginRight: 5, color: "darkgray" }]}>{this.props.progressionString}</Text>
                </View>
                </View>
                    <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                </View>
            </View>
        </View>
    );
  }
}