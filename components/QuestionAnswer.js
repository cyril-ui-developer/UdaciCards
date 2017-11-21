import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import PropTypes from "prop-types";
import Styles from "../styles";
import Score from "./Score";
import FlipCard from "react-native-flip-card";
import Button from "./Button";

const QuestionAnswer = function({
  showScore,
  currentQuestion,
  styles,
  questonsCount,
  score,
  question
}) {
  return (
    <View style={styles.textsContainer}>
      {showScore ? (
        <Score percentage={parseInt(score / questonsCount * 100)} />
      ) : (
        <View style={{ height: 0 }}>
          <FlipCard style={{ borderWidth: 0 }} flip={true} flipVertical={true}>
            <View style={{ alignItems: "center" }}>
              <Text style={styles.subtitle}>Show Question</Text>
              <Text style={styles.title}>{question.answer}</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <Text style={styles.subtitle}>Show Answer</Text>
              <Text style={styles.title}>{question.question}</Text>
            </View>
          </FlipCard>
        </View>
      )}
    </View>
  );
};

export default QuestionAnswer;
