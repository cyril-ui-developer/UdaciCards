import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, View, Alert,Button, Icon, TouchableOpacity,TextInput, AsyncStorage,StyleSheet} from 'react-native';
import { TabNavigator , StackNavigator} from 'react-navigation';
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { Card, ListItem, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { mockData } from './MockData';
import { StackNav } from './StackNav';
import { MainApp } from './Main'
import { UserForm } from './UserForm';



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { decks:mockData}
    this. updateList() 
   }
   updateList() {
  //  dataListOrder = getOrder(dataList);
    this.setState({
      decks: this.state.decks
    });
  }
  render() {
    return (
      <StackNav screenProps={this.state.decks}  />
      // <MainApp />
      // <UserForm /> 
    
    );
  }
}

const styles = StyleSheet.create({
  submitButton:{
    justifyContent:"center",
    alignItems:"center",
    padding:10,
    margin:10,
    color:"red",
    backgroundColor:"red"
  }
})



// let Tasks = {
//     convertToArrayOfObject(tasks, callback) {
//       console.log(tasks)
//       return callback(
//         tasks ? tasks.split("||").map((task, i) => ({ key: i, text: task })) : []
//       );
//     },
//     convertToStringWithSeparators(tasks) {
//       return tasks.map(task => task.text).join("||");
//     },
//     all(callback) {
//       return AsyncStorage.getItem("TASKS", (err, tasks) =>{
//         this.convertToArrayOfObject(tasks, callback)
//         console.log(tasks)
//       });
//     },
//     save(tasks) {
//       console.log(tasks)
//       AsyncStorage.setItem("TASKS", this.convertToStringWithSeparators(tasks));
//     }
//   };