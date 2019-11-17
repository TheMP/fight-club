import React from "react";

import Icon from 'react-native-vector-icons/FontAwesome';
import { Animated, View, Text, Image, StyleSheet, TouchableHighlight } from "react-native";
import { Button } from 'react-native-elements';
import { NavigationContainerProps } from "react-navigation"
import Course from "./components/course";

export interface HomeProps {

}

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#222222'
  },
  topContainerText: {
    marginTop: 30,
    padding: 10,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 20,
    fontWeight: "800",
    color: "white",
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
    borderRadius: 5,
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
          <View>
            <Text style={styles.topContainerText}>My Courses</Text>
            <TouchableHighlight onPress={() => this.props.navigation!.navigate('Depression', {stage: 2})}>
              <Course category="Mental Health" title="How to deal with depression" progressionPercent="30%" progressionString="3/10" />
            </TouchableHighlight>
          </View>
          <View>
            <TouchableHighlight onPress={() => this.props.navigation!.navigate('Burnout')}>
              <Course category="Burnout" title="Introduction to Burnout" progressionPercent="18%" progressionString="2/9" />
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