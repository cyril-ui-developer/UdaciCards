import React, { Component } from "react";
import {
  KeyboardAvoidingView,
  ListView,
  Text,
  View,
  Icon,
  TouchableOpacity,
  TextInput,
  StyleSheet
} from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import {
  Card,
  ListItem,
  FormLabel,
  FormInput,
  FormValidationMessage
} from "react-native-elements";
import { NavigationActions } from "react-navigation";
import { saveDeck } from "../Async";
import Button from "./Button";
import Styles from "../styles";

export class AddDeck extends React.Component {
  static navigationOptions = {
    title: "Add Deck"
  };

  state = {
    title: ""
  };

  createDeck = () => {
    saveDeck(this.state.title).then(deck => {
      const resetAction = NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({
            routeName: "DeckView",
            params: { title: deck.title }
          })
        ]
      });
      this.props.navigation.dispatch(resetAction);
    });
  };

  render() {
    const { title } = this.state;

    return (
      <KeyboardAvoidingView behavior={"padding"} style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={[styles.title, { marginBottom: 30 }]}>
            Add New Deck Title
          </Text>
          <TextInput
            value={title}
            placeholder="Enter new deck title"
            onChangeText={text => this.setState({ title: text })}
            autoFocus={true}
            style={[
              Styles.inputText,
              { alignSelf: "stretch", marginBottom: 30 }
            ]}
          />
          <Button
            text="Create Deck"
            onPress={this.createDeck}
            disabled={title.length === 0}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 35,
    textAlign: "center"
  }
});
