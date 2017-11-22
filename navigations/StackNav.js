import React, { Component } from "react";
import {
  ActivityIndicator,
  ListView,
  Text,
  View,
  Alert,
  Button,
  Icon,
  TouchableOpacity,
  TextInput,
  AsyncStorage,
  StyleSheet
} from "react-native";
import { TabNavigator, StackNavigator } from "react-navigation";
import { ListDecks } from "../components/ListDecks";
import { DeckView } from "../components/DeckView";
//import { Tabs } from "../navigations/Tabs";
import { AddCardToDeck } from "../components/AddCardToDeck";
import { AddDeck } from "../components/AddDeck";
import { Quiz } from "../components/Quiz";

export const StackNav = StackNavigator({
  ListDecks: {
    screen: ListDecks,
    navigationOptions: {}
  },
  DeckView: {
    screen: DeckView,
    navigationOptions: {
      title: "Deck View"
    }
  },
  AddCardToDeck: {
    screen: AddCardToDeck,
    navigationOptions: {
      title: "Add Card To Deck"
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      title: "Start Quiz"
    }
  }
});
