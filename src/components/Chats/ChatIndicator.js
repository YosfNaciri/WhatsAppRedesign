import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as style from '../../styles/Style';

export default function ChatIndicator({totalNew}) {
  if (totalNew > 0) {
    return (
      <View style={{height: '100%'}}>
        <Text style={{alignSelf: 'flex-start', color: style.secondGrey}}> 15: 33 </Text>
        <LinearGradient
          colors={[style.primaryGreen, style.primaryCyan]}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          style={styles.msgIndicator}>
          <Text style={{color: '#fff', fontSize: 15}}>{totalNew}</Text>
        </LinearGradient>
      </View>
    );
  }
  return (
    <View style={{height: '100%'}}>
      <Text style={{alignSelf: 'flex-start', color: style.secondGrey}}> 15: 33 </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badgeStyle: {
    width: 15,
    height: 15,
    borderRadius: 50,
    borderColor: '#fff',
    borderWidth: 2,
  },
  msgIndicator: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: style.primaryGreen,
    borderRadius: 50,
    height: 26,
    width: 26,
    alignSelf: 'center',
    marginTop: 10,
  },
});
