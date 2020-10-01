import React from 'react';
import {StyleSheet, View, Button, Text, ScrollView} from 'react-native';
import Stories from '../components/Stories/Stories';
import ChatsList from '../components/Chats/ChatsList'
import {Contacts, MessageBoxs} from '../Data/Data';

export default function Messages({navigation}) {
  return (
    <View style={styles.container}>
      <Stories Stories={Contacts} />
      <ChatsList navigation={navigation} chatsList={MessageBoxs} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
