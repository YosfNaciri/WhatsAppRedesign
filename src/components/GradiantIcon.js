

import React from 'react'
import MaskedView from '@react-native-community/masked-view';

import * as style from '../styles/Style';

import { StyleSheet, View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function GradiantIcon({icon}) {
      return ( 
        <MaskedView
        style={{ flex: 1, height: 50, width : 50}}
        maskElement={
          <View
          style={{
            backgroundColor: 'transparent',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}
          >
              {icon}
          </View>
        }
      >
        <LinearGradient 
        start={{x: 0, y: 1}} 
        end={{x: 1, y: 0}} 
        colors={[style.primaryGreen, style.primaryCyan]}
        style = {{flex : 1}}
        >
        </LinearGradient>     
      </MaskedView>
      ) 
    }


const styles = StyleSheet.create({

    });
    