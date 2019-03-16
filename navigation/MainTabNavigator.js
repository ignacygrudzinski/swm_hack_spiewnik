import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

import TabBarIcon from '../components/TabBarIcon'
import HomeScreen from '../screens/HomeScreen'
import SongScreen from '../screens/SongScreen'
import BookmarkScreen from '../screens/BookmarkScreen'

const HomeStack = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Song: { screen: SongScreen },
  },
  {
    initialRouteName: 'Home'
  }
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const BookmarkStack = createStackNavigator({
  Bookmarks: BookmarkScreen,
});

BookmarkStack.navigationOptions = {
  tabBarLabel: 'Bookmarks',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  BookmarkStack,
});
