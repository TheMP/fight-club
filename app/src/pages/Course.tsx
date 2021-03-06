import React from "react";

import { View, Text, Button, StyleSheet, Dimensions  } from "react-native";
import { NavigationContainerProps } from "react-navigation";
import { TouchableHighlight } from "react-native-gesture-handler";
import { withTheme } from "react-native-elements";
const { width } = Dimensions.get("window");
import scenarioStyle from "../../src/common/styles"

export interface DepressionCourseProps {

}

const calcTileDimensions = (deviceWidth, tpr) => {
  const margin = deviceWidth / (tpr * 10);
  const size = (deviceWidth - margin * (tpr * 2)) / tpr;
  return { size, margin };
};

export default class DepressionCourse extends React.Component<DepressionCourseProps & NavigationContainerProps<{}>, {}> {
    render() {
      const tileDimensions = calcTileDimensions(width, 2)  // -> change this number and see!
     // const tiles = 'Lorem Ipsum Dolor Sit Amet'.split(' ')
      const tiles = [
        { name: "Social Isolation", view: "Anger", icon: "😠" },
        { name: "Burnout", view: "Home", icon: "🤬" },
        { name: "Substance Abuse", view: "Home", icon: "😳" },
        { name: "Social Grievance", view: "Home", icon: "😔" }
      ]

      return (
        <View style={{...styles.container, height: '100%', marginTop: -20, paddingTop: 60}}>
          {tiles.map(i => Item({...tileDimensions, tile: i, main: this}))}     
        </View>
      );
    }
}

const Item = ({size, margin, tile, main}) => (
  <TouchableHighlight onPress={() => main.props.navigation.navigate(tile.view)}>
    <View style={[styles.item, {width: size, height: size, marginHorizontal: margin}]}>
      <Text style={{fontSize: 50}}>{tile.icon}</Text>
      <Text style={styles.itemText}>{tile.name}</Text>
    </View>
  </TouchableHighlight>
)

const styles = scenarioStyle