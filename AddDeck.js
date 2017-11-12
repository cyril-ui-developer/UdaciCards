import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, View, Alert,Button, Icon, TouchableOpacity,TextInput, AsyncStorage,StyleSheet} from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { Card, ListItem, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

function SubmitBtn ({ onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}>
        <Text>SUBMIT</Text>
    </TouchableOpacity>
  )
}

function submitDeck ( title ) {
//   return AsyncStorage.mergeItem(obj, JSON.stringify({
//    // title: title
   
//  }))
 console.log(title)
}

export class AddDeck extends React.Component{ 
    static navigationOptions = {
      title: 'Add Deck'
    };
    constructor(props) {
      super(props);
      this.state = {text: '', disableSubmit:false};
    }
  
    changeTextHandler = text => {
      this.setState({ text: text });
    };
  
    submitDeck(event){
      let title = event.nativeEvent.text;
      console.log(title)
      submitDeck(title)
     // obj = Object.assign(obj, {[title]:{title:title}})
    // console.log(obj)
    // return obj
    }
    
    render(){
     return (
    <View>
     <FormLabel>Enter new deck</FormLabel>
     <FormInput onChange={this.changeTextHandler} onSubmitEditing = {this.submitDeck} value={this.state.text} />
    <FormValidationMessage>{'This field is required'}</FormValidationMessage>
    {/* <Button title='SUBMIT' style={styles.submitButton} onPress={() => { this.setState({disableSubmit:true})}} disabled={this.state.disableSubmit} /> */}
    <SubmitBtn onPress={this.submitDeck} />
    </View>
  )
    }
  
  
  }