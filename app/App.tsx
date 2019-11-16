import React from 'react';
import Home from "./src/pages/Home";
import Chat from "./src/pages/Chat";
import Logo from "./src/pages/Logo";
import Course from "./src/pages/Course";
import Success from "./src/pages/Success";
import Failure from "./src/pages/Failure";
import Anger from "./src/pages/courses/Anger"

import { createAppContainer, createSwitchNavigator, } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
  Success: {
    screen: Success
  },
  Failure: {
    screen: Failure
  },
  Chat: {
    screen: Chat,
  },
  Course : {
    screen: Course,
  },
  Logo: {
    screen: Logo,
  },

  Anger: {
    screen: Anger
  }
}, {
  initialRouteName: 'Chat',
  headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
});

const InitialNavigator = createSwitchNavigator({
  App: AppNavigator
});

const AppContainer = createAppContainer(InitialNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
