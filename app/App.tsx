import React from 'react';
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Logo from "./pages/Logo";
import Course from "./pages/Course";

import { createAppContainer } from 'react-navigation';
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

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
