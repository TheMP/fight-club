import React from "react";

import Icon from 'react-native-vector-icons/FontAwesome';
import { Animated, View, Text, StyleSheet } from "react-native";
import { NavigationContainerProps } from "react-navigation"

export interface ClassProps {
    category: string;
    title: string;
    completed: boolean;
    icon: string;
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
  buttonIcon: {
    marginTop: 5,
    marginRight: 10,
  },
})

export default class Class extends React.Component<ClassProps & NavigationContainerProps<{}>, {}> {
  render() {
    const color = this.props.completed ? "lightgreen" : "white"
    const icon = this.props.completed ? "check-circle": "circle"
    return (
        <View style={styles.topContainer}>
            <View style={styles.course}>
                <View>
                    <Text style={styles.courseCategory}>{this.props.category}</Text>
                </View>
                <View style={{flexDirection: 'row', marginTop: 5, width: "80%" }}>
                    <Icon
                        name={this.props.icon}
                        size={20}
                        color="white"
                        style={styles.buttonIcon}
                    />
                    <Text style={styles.courseName}>{this.props.title}</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                    <Icon
                    name={icon}
                    size={30}
                    color={color}
                    style={styles.buttonIcon}
                  />
                </View>
            </View>
        </View>
    );
  }
}