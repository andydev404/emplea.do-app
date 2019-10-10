import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screen/Home';
import CategoriesScreen from '../screen/Categories';
import CategoryScreen from '../screen/Category';
import SingleJob from '../screen/SingleJob';

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    SingleJob,
  },
  {initialRouteName: 'Home'},
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Empleos',
  tabBarIcon: ({tintColor}) => (
    <Icon name="ios-albums" size={26} color={tintColor} />
  ),
};

const CategoryStack = createStackNavigator(
  {
    Categories: CategoriesScreen,
    SingleJob,
    CategoryScreen,
  },
  {initialRouteName: 'Categories'},
);

CategoryStack.navigationOptions = {
  tabBarLabel: 'Categorías',
  tabBarIcon: ({tintColor}) => (
    <Icon name="ios-keypad" size={26} color={tintColor} />
  ),
};

const shiftingConfig = {
  activeTintColor: '#1977ff',
  inactiveTintColor: '#758799',
  labelStyle: {fontWeight: 'bold', fontSize: 12},
  style: {
    borderTopWidth: 0,
    elevation: 18,
    shadowOpacity: 0.02,
    shadowOffset: {width: 0, height: -8},
    height: 60,
    paddingBottom: 5,
  },
};

export default createBottomTabNavigator(
  {
    HomeStack,
    CategoryStack,
  },
  {tabBarOptions: shiftingConfig},
);
