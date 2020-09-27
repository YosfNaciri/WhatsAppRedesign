/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import Routes from './src/Routes/index'

function App () {
  return (
    <Routes/>      
  );
};

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : "#ffffff",
    justifyContent : "center",
    alignItems : "center",
  }
});

export default App;
