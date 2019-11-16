import React from "react";

import { Animated, View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { NavigationContainerProps } from "react-navigation"

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#222222'
  },
  topContainer: {
    margin: 30,
  },
  topContainerText: {
    fontSize: 20,
    fontWeight: "800",
    color: "white",
    marginBottom: 10,
    marginTop: 20,
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

export default class BurnoutCourse extends React.Component<NavigationContainerProps<{}>, {}> {
  render() {
    return (
      <View style={[styles.page, { flex: 1 }]}>
        <View style={styles.topContainer}>
          <TouchableHighlight>
            <View style={styles.course}>
              <View>
                <Text style={styles.courseCategory}>Burnout</Text>
              </View>
              <View>
                <Text style={styles.courseName}>Introduction to burnout</Text>
              </View>
              <View style={{marginTop: 10}}>
                <Text style={styles.courseProgression}>Course Progression</Text>
                <View style={styles.progressBar}>
                <Animated.View style={[StyleSheet.absoluteFill, {backgroundColor: "darkseagreen", width: "0%" }]}/>
                <Text style={[StyleSheet.absoluteFill, {textAlign: 'right', marginRight: 5, color: "darkgray" }]}>0/10</Text>
                </View>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
              </View>
            </View>
          </TouchableHighlight>
          <TouchableHighlight>
            <View style={styles.course}>
              <View>
                <Text style={styles.courseCategory}>Burnout</Text>
              </View>
              <View>
                <Text style={styles.courseName}>Burnout: Symptoms and indicators</Text>
              </View>
              <View style={{marginTop: 10}}>
                <Text style={styles.courseProgression}>Course Progression</Text>
                <View style={styles.progressBar}>
                <Animated.View style={[StyleSheet.absoluteFill, {backgroundColor: "darkseagreen", width: "0%" }]}/>
                <Text style={[StyleSheet.absoluteFill, {textAlign: 'right', marginRight: 5, color: "darkgray" }]}>0/10</Text>
                </View>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
              </View>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}