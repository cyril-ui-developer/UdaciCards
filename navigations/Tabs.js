import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, View, Alert,Button, Icon, TouchableOpacity,TextInput, AsyncStorage,StyleSheet} from 'react-native';
import { TabNavigator , StackNavigator} from 'react-navigation';
import { FontAwesome, Ionicons } from '@expo/vector-icons'

import { ListDecks } from '../components/ListDecks';
import { AddDeck } from '../components/AddDeck';
import { StackNav } from './StackNav';

export const Tabs = TabNavigator({
  ListDecks: {
    screen: StackNav,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor, focused }) => <Ionicons name={focused ? 'ios-home':'ios-home-outline'} size={30} color={tintColor} />
    },
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
      tabBarIcon: ({ tintColor, focused,  }) => <Ionicons name={ focused ? 'ios-add':'ios-add-outline'} size={30} color={tintColor} />
    },
  },
})