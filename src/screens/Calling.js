
import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';


export default function Calling() {
    return (
        <View style={styles.container}>
            <Text>Calling</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
      flex : 1,
      backgroundColor : "#ffffff",
      justifyContent : "center",
      alignItems : "center",
    }
  });
  