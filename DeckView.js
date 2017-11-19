import React, { Component } from 'react';
import { ActivityIndicator, KeyboardAvoidingView, Button , DeviceEventEmitter, ListView, Text, View, Alert, Icon, TouchableOpacity,TextInput, AsyncStorage,StyleSheet} from 'react-native';
import { Card, ListItem, FormLabel, FormInput, FormValidationMessage, PricingCard  } from 'react-native-elements'

import { mockData } from './MockData';
import { getDeck } from './Async';
//import Button from './Button';

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

    render() {
      const { params } = this.props.navigation.state;
      const { deck } = this.state;
      
              if (!deck) {
                  return (<Text>Deck not found</Text>);
              }
      
      return (
      
   
   <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>

        <PricingCard
               color='#4f9deb'
               title={deck.title}
               price={deck.questions.length}
               info={['Add card and/or take a quiz']}
               button={{ title: 'START QUIZ', icon: 'flight-takeoff' }}
               onButtonPress={this._onPressButton}
             />
             <Button
             onPress={this._onPressButton}
             title="Create Card"
           />
           {/* <Card title={deck.title}>
                <Text style={{marginBottom: 10}}>
                  The idea with React Native Elements is more about component structure than actual design.
                </Text>
                <Button
                  icon={{name: 'code'}}
                  backgroundColor='blue'
                  color="#fff"
                  fontFamily='Lato'
                  buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 10}}
                  title='YES' />
                <Button
                  icon={{name: 'code'}}
                  backgroundColor='red'
                  fontFamily='Lato'
                  buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginTop: 10}}
                  title='NO' /> 
          </Card> */}
           </View>
      
          

      );
    }
  }


          