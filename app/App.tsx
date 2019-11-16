import React from 'react';
import Home from "./src/pages/Home";
import Chat from "./src/pages/Chat";
import Logo from "./src/pages/Logo";
import Course from "./src/pages/Course";
import Success from "./src/pages/Success";

import { createAppContainer, createSwitchNavigator, } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const AppNavigator = createStackNavigator({
  Success: {
    screen: Success
  },
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
}, {
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
