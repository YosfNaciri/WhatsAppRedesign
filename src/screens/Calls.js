
import React from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text
} from 'react-native';


export default function Calls({navigation}) {
    return (
        <View style={styles.container}>
            <Text>Calls</Text>
            <Button title="Call" 
            onPress={() => navigation.navigate('Calling')}/>
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
  