import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, View, Alert,Button, Icon, TouchableOpacity,TextInput, AsyncStorage,StyleSheet} from 'react-native';


export class DeckView extends React.Component {
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