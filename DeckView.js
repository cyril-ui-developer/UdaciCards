import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, View, Alert,Button, Icon, TouchableOpacity,TextInput, AsyncStorage,StyleSheet} from 'react-native';
import { Card, ListItem, FormLabel, FormInput, FormValidationMessage, PricingCard  } from 'react-native-elements'

import { mockData } from './MockData';

function SubmitBtn ({ onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}>
        <Text>SUBMIT</Text>
    </TouchableOpacity>
  )
}

export class DeckView extends React.Component {
    static navigationOptions = ({ navigation }) => ({
      title: `${navigation.state.params.title}`,
    });

    _onPressButton() {
      Alert.alert('You tapped the button!')
    }

    render() {
      const { params } = this.props.navigation.state;
      return (
        <View>
   
          {/* <Card title='HELLO WORLD'>
                <Text style={{marginBottom: 10}}>
                  The idea with React Native Elements is more about component structure than actual design.
                </Text>
                <Button
                  icon={{name: 'code'}}
                  backgroundColor='#03A9F4'
                  fontFamily='Lato'
                  buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                  title='YES' /><Button
                  icon={{name: 'code'}}
                  backgroundColor='RED'
                  fontFamily='Lato'
                  buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                  title='NO' />
          </Card> */}

        <PricingCard
               color='#4f9deb'
               title={params.title}
               price={mockData[params.title].questions.length}
               info={['Add card and/or take a quiz']}
               button={{ title: 'START QUIZ', icon: 'flight-takeoff' }}
               onButtonPress={this._onPressButton}
             />
             <Button
             onPress={this._onPressButton}
             title="Create Card"
           />
        {/* <Card>
          {
          mockData[params.title].questions.map((q, i) => {
            return (
              <ListItem
                key={i}
                title={q.question}
               />
            );
          })
        }
        </Card>
        <Button
            onPress={this._onPressButton}
            title="YES"
          />
          <Button
            onPress={this._onPressButton}
            title="No"
          /> */}
          
      </View>
      );
    }
  }