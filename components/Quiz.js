import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TouchableHighlight } from "react-native";
import { NavigationActions } from "react-navigation";
import FlipCard from "react-native-flip-card";
import { getDeck } from "../Async";
import Styles from "../styles";
import {
  clearLocalNotification,
  setLocalNotification
} from "../helpers/Notifications";
import Button from "./Button";
import QuestionAnswer from "./QuestionAnswer";


export class Quiz extends Component {
  state = {
    deck: null,
    currentQuestion: 0,
    score: 0
  };

  componentDidMount() {
    this.loadDeck();
  }

  loadDeck = () => {
    const { title } = this.props.navigation.state.params;
    getDeck(title).then(deck => this.setState({ deck }));
  };

  goBack = () => {
    this.props.navigation.dispatch(NavigationActions.back());
  };

  restartQuiz = () => {
    this.setState({
      currentQuestion: 0,
      score: 0
    });
  };

  saveAnswer(correct) {
    this.setState(({ score, currentQuestion, deck }) => {
      const newScore = correct ? score + 1 : score;
      const nextQuestion = currentQuestion + 1;

      if (nextQuestion === deck.questions.length) {
        clearLocalNotification().then(setLocalNotification);
      }

      return {
        currentQuestion: nextQuestion,
        score: newScore
      };
    });
  }
//   navigateToListDecks(){
//     const resetAction = NavigationActions.reset({
//         index: 0,
//         actions: [
//           NavigationActions.navigate({
//             routeName: "ListDecks"
//           })
//         ]
//       });
//       this.props.navigation.dispatch(resetAction);
//   }

  render() {
    const { deck, currentQuestion, score } = this.state;

    if (!deck) {
      return <Text>Deck not found</Text>;
    }

    const question = deck.questions[currentQuestion];
    const questonsCount = deck.questions.length;
    const showScore = currentQuestion === deck.questions.length;

    return (
      <View style={styles.container}>
        {/* <TouchableHighlight onPress={ () => this.navigateToListDecks() } style={{marginLeft:-280}}>
            <Text>GO To ListDecks</Text>
        </TouchableHighlight> */}
        {!showScore && (
          <Text style={styles.topLeftText}>
            {currentQuestion + 1} / {questonsCount}
          </Text>
        )}
        <QuestionAnswer
          currentQuestion={currentQuestion}
          questonsCount={questonsCount}
          showScore={showScore}
          score={score}
          question={question}
          styles={styles}
        />
        <View style={styles.buttonsContainer}>
          {showScore ? (
            <View>
              <Button
                text="Back to Deck"
                onPress={this.goBack}
                style={{ marginBottom: 15 }}
                inverted
              />
              <Button text="Reset Quiz" onPress={this.restartQuiz} />
            </View>
          ) : (
            <View>
              <Button
                text="Correct"
                onPress={() => this.saveAnswer(true)}
                style={{
                  marginBottom: 15,
                  borderWidth: 0,
                  backgroundColor: "green"
                }}
              />
              <Button
                text="Incorrect"
                onPress={() => this.saveAnswer(false)}
                style={{ borderWidth: 0, backgroundColor: "red" }}
              />
            </View>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  textsContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 50
  },
  buttonsContainer: {
    marginBottom: 25,
    width: 200
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    paddingBottom: 25,
    textAlign: "center",
    margin: 20,
    backgroundColor: "#666",
    padding: 10,
    color: "#fff",
    borderWidth:3,
    borderColor:"#444"
  },
  subtitle: {
    color: "grey",
    fontSize: 14
  },
  coloredButton: {
    borderWidth: 0
  },
  topLeftText: {
    alignSelf: "flex-start",
    padding: 13,
    fontSize: 17
  },
  bgColor: {
    margin: 20,
    backgroundColor: "red"
  }
});
