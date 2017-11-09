import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, View, Button, Alert, Icon, TouchableOpacity} from 'react-native';
import { TabNavigator , StackNavigator} from 'react-navigation';
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { Card, ListItem } from 'react-native-elements'

const obj = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}

const objKeys = Object.keys(obj)

export default class App extends React.Component {
  render() {
    return (
      <StackNav />
    );
  }
}

class ListDecks extends React.Component {
  static navigationOptions = {
    title: 'Decks'
  };
  
  render() {
    return (
      <View>
      <Card>
      {
      objKeys.map((t, i) => {
        return (
          <ListItem
            key={i}
            title={obj[t].title}
            badge={{ value: 3, textStyle: { color: 'white' } }}
            onPress={() => this.props.navigation.navigate('DeckView', {title:obj[t].title})}
            />
        );
      })
    }
    </Card>
    </View>
    );
  }
}
class DeckView extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.title}`,
  });

  render() {
    const { params } = this.props.navigation.state;
    return (
      <View>
      <Text>Deck! .................. {params.title}</Text>

    </View>
    );
  }
}

class AddDeck extends React.Component{ 
  static navigationOptions = {
    title: 'Add Deck'
  };
  render(){
   return (
  
  <View>
    <Text>Add New Deck! .....................</Text>
  </View>
)
  }
}

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
    },
  },
  DeckView: { 
     screen: DeckView ,
     navigationOptions: {
     title: 'Deck View'
     }
  }
})