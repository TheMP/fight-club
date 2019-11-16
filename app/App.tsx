import React from 'react';
import Home from "./src/pages/Home";
import Chat from "./src/pages/Chat";
import Logo from "./src/pages/Logo";
import Course from "./src/pages/Course";
import SplashScreen from './src/pages/SplashScreen';

import { createAppContainer, createSwitchNavigator, } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
  Chat: {
    screen: Chat,
  },
  Logo: {
    screen: Logo,
  },
  Course : {
    screen: Course,
  }
});

const InitialNavigator = createSwitchNavigator({
  Splash: SplashScreen,
  App: AppNavigator
});

const AppContainer = createAppContainer(InitialNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
