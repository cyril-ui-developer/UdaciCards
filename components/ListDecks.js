import React, { Component } from 'react';
import { ActivityIndicator,DeviceEventEmitter, ListView, Text, View, Alert,Button, Icon, TouchableOpacity,TextInput, AsyncStorage,StyleSheet} from 'react-native';
import { Card, ListItem, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { FontAwesome, Ionicons } from '@expo/vector-icons'

import { mockData } from '../MockData';
import { getDecks } from '../Async';

export class ListDecks extends React.Component {
    
  constructor(props){
    super(props);
  }
  state = {
    decks: null
  };

  static navigationOptions = {
    title: 'Decks'
  };
 
  componentWillMount() {
    DeviceEventEmitter.addListener('onDataChangedEvent', this.loadDecks);
  }

  componentDidMount() {
    this.loadDecks();
  }

  componentWillUnmount() {
    DeviceEventEmitter.removeListener('onDataChangedEvent', this.loadDecks);
  }

   loadDecks = () => getDecks().then(data => this.setState({decks: data}));

      render() {
        const { decks } = this.state;

        if (!decks) {
          return (<Text>No deck is available</Text>);
         }

         const decksKeys = Object.keys(decks)

        return (
          <View>
              <Card>
              {
              decksKeys.map((t, i) => {
                return (
                  <ListItem
                    key={i}
                    title={decks[t].title}
                    badge={{ value:decks[t].questions.length, textStyle: { color: 'white' } }}
                  onPress={() => this.props.navigation.navigate('DeckView', {title:decks[t].title})} 
                    />
                );
              })
            }
            </Card>
        </View>
        );
      }
    }