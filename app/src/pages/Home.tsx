import React from "react";

import Icon from 'react-native-vector-icons/FontAwesome';
import { Animated, View, Text, Image, StyleSheet, TouchableHighlight } from "react-native";
import { Button } from 'react-native-elements';
import { NavigationContainerProps } from "react-navigation"

export interface HomeProps {

}

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#222222'
  },
  topContainer: {
    margin: 10,
  },
  topContainerText: {
    margin: 20,
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
  button: {
    backgroundColor: "#01579b",
  },
  buttonIcon: {
    marginRight: 10,
  },
  buttonText: {
    fontSize: 18,
    color: "white",
  }
})

export default class HomeScreen extends React.Component<HomeProps & NavigationContainerProps<{}>, {}> {
    render() {
      return (
        <View style={[styles.page, { flex: 1 }]}>
          <View style={styles.topContainer}>
            <Text style={styles.topContainerText}>My Courses</Text>
            <TouchableHighlight onPress={() => this.props.navigation!.navigate('Depression')}>
              <View style={styles.course}>
                <View>
                  <Text style={styles.courseCategory}>Mental Health</Text>
                </View>
                <View>
                  <Text style={styles.courseName}>How to deal with depression</Text>
                </View>
                <View style={{marginTop: 10}}>
                  <Text style={styles.courseProgression}>Course Progression</Text>
                  <View style={styles.progressBar}>
                    <Animated.View style={[StyleSheet.absoluteFill, {backgroundColor: "darkseagreen", width: "30%" }]}/>
                    <Text style={[StyleSheet.absoluteFill, {textAlign: 'right', marginRight: 5, color: "darkgray" }]}>3/10</Text>
                  </View>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                </View>
              </View>
            </TouchableHighlight>
            </View>
            <View style={styles.topContainer}>
              <TouchableHighlight onPress={() => this.props.navigation!.navigate('Burnout')}>
                <View style={styles.course}>
                  <View>
                    <Text style={styles.courseCategory}>Burnout</Text>
                  </View>
                  <View>
                    <Text style={styles.courseName}>Introduction to Burnout</Text>
                  </View>
                  <View style={{marginTop: 10}}>
                    <Text style={styles.courseProgression}>Course Progression</Text>
                    <View style={styles.progressBar}>
                      <Animated.View style={[StyleSheet.absoluteFill, {backgroundColor: "darkseagreen", width: "10%" }]}/>
                      <Text style={[StyleSheet.absoluteFill, {textAlign: 'right', marginRight: 5, color: "darkgray" }]}>1/10</Text>
                    </View>
                  </View>
                  <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                  </View>
                </View>
              </TouchableHighlight>
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#222222' }}>
            <View>
              <Button
                title="Discover more courses"
                buttonStyle={styles.button}
                titleStyle={styles.buttonText}
                icon={
                  <Icon
                    name="book"
                    size={15}
                    color="white"
                    style={styles.buttonIcon}
                  />
                }
                onPress={() => this.props.navigation!.navigate('Course')}
              />
            </View>
          </View>
        </View>
      );
    }
  }