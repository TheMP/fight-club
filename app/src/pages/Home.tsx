import React from "react";

import { View, Text, Button, StyleSheet } from "react-native";
import { NavigationContainerProps } from "react-navigation"

export interface HomeProps {

}

const styles = StyleSheet.create({
  category: {
    marginBottom: 10,
    //borderRadius: 4,
  },
})

export default class HomeScreen extends React.Component<HomeProps & NavigationContainerProps<{}>, {}> {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
          <View style={styles.category}>
            <Button
              title="Chat"
              onPress={() => this.props.navigation.navigate('Chat')}
            />
          </View>
          <View style={styles.category}>
            <Button
              title="Learn"
              onPress={() => this.props.navigation.navigate('Logo')}
            />
          </View>
          <View style={styles.category}>
            <Button
              title="Courses"
              onPress={() => this.props.navigation.navigate('Course')}
          />
          </View>
        </View>
      );
    }
  }