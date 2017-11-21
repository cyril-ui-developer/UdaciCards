import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native";

const Score = function({ percentage }) {
  let message, grade;
  if (percentage >= 70) {
    message = "Congratulation!!!";
    grade = "passed";
  } else {
    message = "Sorry, try again!";
    grade = "failed";
  }

  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
      <Text style={styles.grade}>
        You {grade} and scored {percentage}%
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    margin: 20
  },
  message: {
    color: "gray",
    fontSize: 25,
    fontWeight: "bold",
    paddingBottom: 30,
    textAlign: "center"
  },
  grade: {
    color: "#666",
    fontSize: 35,
    fontWeight: "bold",
    paddingBottom: 30,
    textAlign: "center"
  }
});

Score.propTypes = {
  percentage: PropTypes.number.isRequired
};

export default Score;
