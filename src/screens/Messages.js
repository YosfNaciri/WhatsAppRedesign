
import React from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text
} from 'react-native';
import Stories from '../components/Stories/Stories'
import {Contacts} from '../Data/Data'


export default function Messages({navigation}) {
    return (
        <View style={styles.container}>
            <Stories Stories = {Contacts}/>
            <Button title="Chat" 
            onPress={() => navigation.navigate('Chat')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
      //flex : 1,
      backgroundColor : "#ffffff",
      justifyContent : "center",
      alignItems : "center",
    }
  });
  