import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import * as style from '../../styles/Style';


export default function CallIndicator({callFrq, callType}) {
  if (callType === 'Missed Call') {
    return (
      <View style={styles.container}>
        <View style={styles.badgeStyle}>
          <Text style={{color: style.primaryWhite}}> {callFrq} </Text>
        </View>
        <Text style={{color : style.secondGrey}}>15: 33</Text>
      </View>
    );
  }
  return (
    <View>
      <Text style={{color : style.secondGrey}}>15: 33</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  badgeStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: style.systemRed,
    borderRadius: 50,
    height: 26,
    width: 26,
    marginRight: 10,
  },
});
