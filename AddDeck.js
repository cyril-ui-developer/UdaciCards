import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, View, Alert,Button, Icon, TouchableOpacity,TextInput, AsyncStorage,StyleSheet} from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { Card, ListItem, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { NavigationActions } from 'react-navigation'

function SubmitBtn ({ onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}>
        <Text>SUBMIT</Text>
    </TouchableOpacity>
  )
}

// function submitDeck ( title ) {
//   return AsyncStorage.mergeItem(obj, JSON.stringify({
//    title: title
   
//  }))
//  console.log(title)
// }

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
  



    submitDeck(title){
     // let title = event.nativeEvent.text;
   //  console.log(title)
 
   this.state.decks = Object.assign(this.props.screenProps, {[title]:{title:title}})
     console.log(this.state.decks)
     this.props.navigation.dispatch(NavigationActions.setParams({
      params: this.state.decks,
      key: 'screen-123',
      action: NavigationActions.navigate(this.state.decks)
    }))
   // this.props.updateList(this.state.decks)
    }
    
    state = {}; 
    renderTextfield(options) { 
        return ( 
          <TextInput 
            style={styles.textfield} 
            onChangeText={(value) => this.setState({ [options.name]: value })} 
            placeholder={options.label} 
            value={this.state[options.name]} 
            keyboardType={options.keyboard || 'default'} 
          /> 
        ); 
      }
      renderButton() { 
        return ( 
          <TouchableOpacity 
            onPress={this.onPressButton} 
            style={styles.btn}> 
            <Text style={styles.btnText}>Save</Text> 
          </TouchableOpacity> 
        ); 
      } 

      onPressButton = () => { 
        const { deck, decks } = this.state; 
        this.submitDeck(deck)
        console.log(decks )
        Alert.alert("User's data",`Deck: ${deck}`); 
        this.setState({deck:""})
      } 

    render(){
     return (
    <View>
     <FormLabel>Enter new deck</FormLabel>
         {this.renderTextfield({ name:'deck', label: 'Enter Deck'})} 
         {this.renderButton()} 
    </View>
  )
    }
  
  
  }

  const styles = StyleSheet.create({ 
    panel: { 
      backgroundColor: '#fff', 
      borderRadius: 3, 
      padding: 10, 
      marginBottom: 20, 
    }, 
    instructions: { 
      color: '#bbb', 
      fontSize: 16, 
      marginTop: 15, 
      marginBottom: 10, 
    },     textfield: { 
        height: 40, 
        marginBottom: 10, 
      }, 
      btn: { 
        backgroundColor: '#34495e', 
        borderRadius: 3, 
        padding: 12, 
        flex: 1, 
      }, 
      btnText: { 
        textAlign: 'center', 
        color: '#fff', 
        fontSize: 16, 
      },
  });