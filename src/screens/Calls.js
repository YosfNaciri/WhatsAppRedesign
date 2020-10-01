
import React from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text
} from 'react-native';
import CallsList from '../components/Calls/CallsList';
import {CallsHistory} from '../Data/Data'


export default function Calls({navigation}) {
    return (
        <View style={styles.container}>
          <CallsList navigation={navigation} calls={CallsHistory} />
            {/* <Text>Calls</Text>
            <Button title="Call" 
            onPress={() => navigation.navigate('Calling')}/> */}
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
  