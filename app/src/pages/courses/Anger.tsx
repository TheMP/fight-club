import React from "react";

import { View, Text } from "react-native";
import { NavigationContainerProps } from "react-navigation";
import scenarioStyle from "../../../src/common/styles"

export default class AngerCourse extends React.Component<NavigationContainerProps<{}>, {}> {
    render() {
      return (
        <View style={styles.container}>
            <Text style={styles.itemText}>
                Wooohooo very angry{'\n'}
                {'\n'}
                Stages of blah:{'\n'}
                - angry{'\n'}
                - sad{'\n'}
            </Text>   
        </View>
      );
    }
}

const styles = scenarioStyle