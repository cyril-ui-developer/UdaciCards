import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';
import FlipCard from 'react-native-flip-card';
import { getDeck } from '../Async';
import Styles from '../styles';
import Score from './Score';
import { clearLocalNotification, setLocalNotification } from '../helpers/Notifications';
import Button from './Button';

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
        console.log(title)
        getDeck(title).then(deck => this.setState({deck}));
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
        this.setState(({score, currentQuestion, deck}) => {
            const newScore = correct ? score + 1 : score;
            const nextQuestion = currentQuestion + 1;

            if (nextQuestion  === deck.questions.length) {
                clearLocalNotification()
                    .then(setLocalNotification);
            }

            return {
                currentQuestion: nextQuestion,
                score: newScore
            }
        })
    };

    render() {
        const { deck, currentQuestion, score } = this.state;

        if (!deck) {
            return (<Text>Deck not found</Text>);
        }

        const question = deck.questions[currentQuestion];
        const questonsCount = deck.questions.length;
        const showScore = currentQuestion === deck.questions.length;

        return (
            <View style={styles.container}>
                {!showScore && <Text style={styles.topLeftText}>{currentQuestion + 1} / {questonsCount}</Text>}
                <View style={styles.textsContainer}>
                    {showScore ? (
                        <Score percentage={ parseInt(score / questonsCount * 100) }/>
                    ) : (
                    
                        <View style={{height: 0}}>
                            <FlipCard style={{borderWidth: 0}} flip={true} flipVertical={true}>
                                <View style={{alignItems: 'center'}}>
                                    <Text style={styles.subtitle}>Show Question</Text>
                                    <Text style={styles.title}>{question.answer}</Text>
                                </View>
                                <View style={{alignItems: 'center'}}>
                                    <Text style={styles.subtitle}>Show Answer</Text>
                                    <Text style={styles.title}>{question.question}</Text>
                                </View>
                            </FlipCard>
                        </View>
                    )}
                </View>
                <View style={styles.buttonsContainer}>
                    {showScore ? (
                        <View>
                            <Button text="Back to Deck" onPress={this.goBack} style={{marginBottom: 15}} inverted/>
                            <Button text="Reset Quiz" onPress={this.restartQuiz}/>
                        </View>
                    ) : (
                        <View>
                            <Button text="Correct" onPress={() => this.saveAnswer(true)} style={{marginBottom: 15, borderWidth: 0, backgroundColor:'green'}}/>
                            <Button text="Incorrect" onPress={() => this.saveAnswer(false)} style={{ borderWidth: 0, backgroundColor: 'red'}}/>
                        </View>
                    )}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    textsContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: 50
    },
    buttonsContainer: {
        marginBottom: 25,
        width: 200
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingBottom: 25,
        textAlign: 'center',
        margin:20,
        backgroundColor:"#666",
        padding:10,
        color:'#fff'
    },
    subtitle: {
        color: 'grey',
        fontSize: 14
    },
    coloredButton: {
        borderWidth: 0
    },
    topLeftText: {
        alignSelf: 'flex-start',
        padding: 13,
        fontSize: 17
    },
    bgColor:{
        margin:20,
        backgroundColor:"red"
    }
});
