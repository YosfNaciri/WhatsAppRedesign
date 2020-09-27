
import React from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text
} from 'react-native';


export default function Chat({navigation}) {
    return (
        <View style={styles.container}>
            <Text>Chat</Text>
            <Button title="Profile" 
            onPress={() => navigation.navigate('Profile')}/>
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
  