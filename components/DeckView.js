import React, { Component } from 'react';
import { ActivityIndicator, KeyboardAvoidingView,  DeviceEventEmitter, ListView, Text, View, Alert, Icon, TouchableOpacity,TextInput, AsyncStorage,StyleSheet} from 'react-native';
import { Card, ListItem, FormLabel, Badge, FormInput, FormValidationMessage  } from 'react-native-elements'

import { mockData } from '../MockData';
import { getDeck } from '../Async';
import Button from './Button';
import { AddCardToDeck } from "./AddCardToDeck";

export class DeckView extends React.Component {
    static navigationOptions = ({ navigation }) => ({
      title: `${navigation.state.params.title}`,
    });

    _onPressButton() {
      Alert.alert('You tapped the button!')
    }

    state = {
      deck: null
  };

  componentWillMount() {
      DeviceEventEmitter.addListener('onDataChangedEvent', this.loadDeck);
  }

  componentDidMount() {
      this.loadDeck();
  }

  componentWillUnmount() {
      DeviceEventEmitter.removeListener('onDataChangedEvent', this.loadDeck);
  }

  loadDeck = () => {
      const { deckId } = this.props.navigation.state.params;
      const { title } = this.props.navigation.state.params;
    console.log(deckId)
      getDeck(title).then(deck => this.setState({deck}));
  };
  addCard = () => {
    const { navigation } = this.props;
    const { title } = navigation.state.params;

    navigation.navigate('AddCardToDeck', {title});
};

startQuiz = () => {
    const { navigation } = this.props;
    const { title } = navigation.state.params;

    this.props.navigation.navigate('Quiz', {title});
};

    render() {
      const { params } = this.props.navigation.state;
      const { deck } = this.state;
      
              if (!deck) {
                  return (<Text>Deck not found</Text>);
              }
      
      return (
      
   
   <View style={{flex: 1,flexDirection: 'column',justifyContent: 'center',alignItems: 'center'}}>
           <Card  title={deck.title}>
           <Badge value= {deck.questions.length} textStyle={{ color: '#fff' , fontSize: 25}}/>
           <Text style={{marginBottom: 10}}>
                Create a Card and/or take a Quiz
           </Text>
          </Card>
    
          <View style={styles.buttonsContainer}>
                    <Button text="Add Card" onPress={this.addCard} style={{marginBottom: 15}} inverted/>
                    <Button text="Start Quiz" disabled={deck.questions.length === 0} onPress={this.startQuiz}/>
          </View>
   </View>
      
          

      );
    }
  }


  const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    textsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonsContainer: {
         marginTop: 15,
        marginBottom: 15,
        width: 200
    },
    title: {
        fontSize: 60,
        fontWeight: 'bold',
        paddingBottom: 10
    },
    subtitle: {
        color: 'grey',
        fontSize: 20
    }
});