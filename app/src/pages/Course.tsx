import React from "react";

import { View, Text, Button, StyleSheet, Dimensions  } from "react-native";
import { NavigationContainerProps } from "react-navigation";
const { width } = Dimensions.get("window");

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
      const tiles = ["Scenario I", "Scenario II", "Scenario III"]
    
      return (
        <View style={styles.container}>
          {tiles.map(i => Item({...tileDimensions, text: i, ...tiles2}))}     
        </View>
      );
    }
}

const Item = ({size, margin, text}) => (
  <View style={[styles.item, {width: size, height: size, marginHorizontal: margin}]}>
    <Text style={styles.itemText}>{text}</Text>
  </View>
)


const styles = StyleSheet.create({
  container: {
     justifyContent: "flex-start", flexDirection: "row", flexWrap: "wrap", marginTop: 30
  },
  item: {
    backgroundColor: 'blue',  
     alignSelf: "flex-start",
     alignItems: 'center',
     justifyContent: 'center',
     marginBottom: 20
  },
  itemText: {
    fontSize: 20
  }
});