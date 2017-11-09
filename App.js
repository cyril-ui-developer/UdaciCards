import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, View, Button, Alert, Icon} from 'react-native';
import { TabNavigator , StackNavigator} from 'react-navigation';
import { FontAwesome, Ionicons } from '@expo/vector-icons'

export default class App extends React.Component {
  render() {
    return (
      <StackNav />
    );
  }
}

class ListDecks extends React.Component {
  static navigationOptions = {
    title: 'Welcome'
  };
  render() {
    return (
      <View>
      <Text>List of Decks! ..................</Text>
      <Button
      onPress={() => this.props.navigation.navigate('DeckView')}
      title="Click Deck"
    />
    </View>
    );
  }
}
class DeckView extends React.Component {
  render() {
    return (
      <View>
      <Text>Deck! ..................</Text>
    </View>
    );
  }
}

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

const StackNav = StackNavigator({
  Home: { 
    screen: Tabs,
    navigationOptions: {
    title: 'Decks',
    },
  },
  DeckView: { 
     screen: DeckView ,
     navigationOptions: {
     title: 'Add Deck'
     }
  },
})