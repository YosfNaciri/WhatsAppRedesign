
import React from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text
} from 'react-native';


export default function Messages({navigation}) {
    return (
        <View style={styles.container}>
            <Text>Messages</Text>
            <Button title="Chat" 
            onPress={() => navigation.navigate('Chat')}/>
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
  