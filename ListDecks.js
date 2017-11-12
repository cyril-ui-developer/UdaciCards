import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, View, Alert,Button, Icon, TouchableOpacity,TextInput, AsyncStorage,StyleSheet} from 'react-native';
import { Card, ListItem, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { FontAwesome, Ionicons } from '@expo/vector-icons'

import { mockData } from './MockData';
import { AsyncMockData } from './Async';

export class ListDecks extends React.Component {
    
      constructor(props){
        super(props);
        const data = AsyncMockData();
        this.state = { decks:mockData}
    
      }
      static navigationOptions = {
        title: 'Decks'
      };
    
      render() {
         const decksKeys = Object.keys(this.props.screenProps)
         console.log(this.props.screenProps)
        return (
          <View>
          <Card>
          {
          decksKeys.map((t, i) => {
            return (
              <ListItem
                key={i}
                title={this.props.screenProps[t].title}
                badge={{ value: this.props.screenProps[t].questions.length, textStyle: { color: 'white' } }}
              onPress={() => this.props.navigation.navigate('DeckView', {title:this.props.screenProps[t].title})} 
                />
            );
          })
        }
        </Card>
        </View>
        );
      }
    }