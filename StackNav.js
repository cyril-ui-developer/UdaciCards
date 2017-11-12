import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, View, Alert,Button, Icon, TouchableOpacity,TextInput, AsyncStorage,StyleSheet} from 'react-native';
import { TabNavigator , StackNavigator} from 'react-navigation';

import { ListDecks } from './ListDecks';
import { DeckView } from './DeckView';
import {Tabs } from './Tabs';

export const StackNav = StackNavigator({
    ListDecks: { 
      screen: Tabs,
      navigationOptions: {
      },
    },
    DeckView: { 
       screen: DeckView ,
       navigationOptions: {
       title: 'Deck View'
       }
    }
  })