import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, View, Button, Alert, Icon} from 'react-native';
import { TabNavigator } from 'react-navigation';
import { FontAwesome, Ionicons } from '@expo/vector-icons'

export default class App extends React.Component {
  render() {
    return (
      <Tabs />
    );
  }
}
const ListDecks = () => (
  <View>
    <Text>List of Decks! ..................</Text>
  </View>
);

const AddDeck = () => (
  <View>
    <Text>Add New Deck! .....................</Text>
  </View>
);

const Tabs = TabNavigator({
  ListDecks: {
    screen: ListDecks,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-home' size={30} color={tintColor} />
    },
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-add' size={30} color={tintColor} />
    },
  },
})