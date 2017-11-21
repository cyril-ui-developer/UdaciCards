import React, { Component } from "react";
import { AsyncStorage, StyleSheet } from "react-native";
import { mockData } from "./MockData";

const DECKS_KEY = "decks:ke";

export function getDecks() {
  return AsyncStorage.getItem(DECKS_KEY)
    .then(data => {
      if (!data) {
        AsyncStorage.setItem(DECKS_KEY, JSON.stringify(mockData));
        return mockData;
      } else {
        return JSON.parse(data);
      }
    })
    .catch(err => {
      console.error("Error", err);
      return null;
    });
}

export function saveDeck(title) {
  console.log(title);
  return AsyncStorage.getItem(DECKS_KEY)
    .then(data => {
      const backedUpData = JSON.parse(data);

      backedUpData[title] = {
        title,
        questions: []
      };

      return AsyncStorage.setItem(
        DECKS_KEY,
        JSON.stringify(backedUpData)
      ).then(() => {
        return { title };
      });
    })
    .catch(err => {
      console.error("Error", err);
      return null;
    });
}

export function getDeck(id) {
  return AsyncStorage.getItem(DECKS_KEY)
    .then(data => {
      const decks = JSON.parse(data) || {};
      return decks[id];
    })
    .catch(err => {
      console.error(`Error`, err);
      return null;
    });
}

export function addCardToDeck(id, card) {
  return AsyncStorage.getItem(DECKS_KEY)
    .then(data => {
      const storedData = JSON.parse(data);

      storedData[id].questions.push(card);

      return AsyncStorage.setItem(DECKS_KEY, JSON.stringify(storedData));
    })
    .catch(err => {
      console.error("Error", err);
      return null;
    });
}
