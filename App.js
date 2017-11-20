import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, View, Alert,Button, Icon, TouchableOpacity,TextInput, AsyncStorage,StyleSheet} from 'react-native';
import { TabNavigator , StackNavigator} from 'react-navigation';
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { Card, ListItem, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { mockData } from './MockData';
import { StackNav } from './navigations/StackNav';

export default class App extends React.Component {
  render() {
    return (
      <StackNav/> 
    );
  }
}
