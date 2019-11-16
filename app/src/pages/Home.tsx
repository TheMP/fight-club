import React from "react";

import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, Image, StyleSheet } from "react-native";
import { Button, withTheme } from 'react-native-elements';
import { NavigationContainerProps } from "react-navigation"

export interface HomeProps {

}

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: "800",
    marginBottom: 30,
    color: "white",
  },
  category: {
    width: 200,
    marginBottom: 30,
  },
  buttonIcon: {
    marginRight: 10,
  },
  buttonText: {
    fontSize: 30,
    color: "white",
  }
})

export default class HomeScreen extends React.Component<HomeProps & NavigationContainerProps<{}>, {}> {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#222222' }}>
          <Image
            style={{width: 100, height: 100}}
            source={require('../../assets/logo.png')} />
          <Text style={styles.title}>FightClub</Text>
          <View style={styles.category}>
            <Button
              title="Chat"
              titleStyle={styles.buttonText}
              icon={
                <Icon
                  name="comments"
                  size={30}
                  color="white"
                  style={styles.buttonIcon}
                />
              }
              onPress={() => this.props.navigation.navigate('Chat')}
            />
          </View>
          <View style={styles.category}>
            <Button
              title="Learn"
              titleStyle={styles.buttonText}
              icon={
                <Icon
                  name="book"
                  size={30}
                  color="white"
                  style={styles.buttonIcon}
                />
              }
              onPress={() => this.props.navigation.navigate('Course')}
            />
          </View>
        </View>
      );
    }
  }