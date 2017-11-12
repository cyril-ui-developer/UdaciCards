
import React, { Component } from 'react';
import { AsyncStorage,StyleSheet} from 'react-native';

import { mockData } from './MockData';

export function AsyncMockData (){

let asyncMockData;
AsyncStorage.setItem('key', JSON.stringify(mockData), () => {
    AsyncStorage.getItem('key', (err, result) => {
        console.log(asyncMockData);
        asyncMockData = result;
      });
});

//AsyncStorage.getItem('key');

 return asyncMockData;
}
