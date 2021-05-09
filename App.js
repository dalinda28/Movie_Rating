import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Login from './controllers/Login';
import Home from './controllers/Home';
import AddFilm from './controllers/AddFilm'
import Search from './controllers/Search';
import Fragment from './controllers/Fragment';
import DetailsFilm from './controllers/DetailsFilm';

//const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator 
         initialRouteName="Compte"
         tabBarOptions={{
           activeTintColor: '#e91e63',
         }} >
          <Tab.Screen
            name="Compte"
            component={Login}
            options={{
              tabBarLabel: 'Compte',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="account" color={color} size={size} />
              ),
            }} />
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarLabel: 'Mes listes',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="format-list-bulleted" color={color} size={size} />
              ), headerLeft: null
            }} />
          <Tab.Screen
            name="AddFilm"
            component={AddFilm}
            options={{
              tabBarLabel: 'Ajouter',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="playlist-plus" color={color} size={size} />
              )
            }} />
            <Tab.Screen
            name="Search"
            component={Search}
            options={{
              tabBarLabel: 'Search',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="magnify" color={color} size={size} />
              )
            }} />
            <Tab.Screen
            name="DetailsFilm"
            component={DetailsFilm}
            options={{
              tabBarLabel: 'Détail ',
            }} />
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}
