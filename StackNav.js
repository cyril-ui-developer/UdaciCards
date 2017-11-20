import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, View, Alert,Button, Icon, TouchableOpacity,TextInput, AsyncStorage,StyleSheet} from 'react-native';
import { TabNavigator , StackNavigator} from 'react-navigation';

import { ListDecks } from './ListDecks';
import { DeckView } from './DeckView';
import {Tabs } from './Tabs';
import { AddCardToDeck } from "./AddCardToDeck";
import { AddDeck } from './AddDeck';
import { Quiz } from './Quiz';

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
    },
    AddCardToDeck: { 
       screen: AddCardToDeck,
       navigationOptions: {
       title: 'Add Card To Deck'
       }
    },
    Quiz: { 
       screen: Quiz,
       navigationOptions: {
       title: 'Start Quiz'
       }
    }
  })