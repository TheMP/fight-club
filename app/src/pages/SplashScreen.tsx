import React from 'react';
import { View, Text, Image } from "react-native";
import { NavigationContainerProps } from "react-navigation"


export interface SplashScreenProps {

}

export default class SplashScreen extends React.Component<SplashScreenProps & NavigationContainerProps<{}>, {}> {
  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        2000
      )
    );
  }

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.props.navigation.navigate('App');
    }
  }

  render() {
    return (
      <View style={styles.viewStyles}>
          <Image
            style={{width: 100, height: 100}}
            source={require('../../assets/logo.png')} />
          <Text style={styles.textStyles}>FightClub</Text>
      </View>
    );
  }
}

const styles = {
  viewStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#222222',
  },
  textStyles: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold'
  }
}

export default SplashScreen;