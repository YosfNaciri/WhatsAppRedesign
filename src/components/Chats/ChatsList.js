import React from 'react';
import {StyleSheet, View, ScrollView, Text, Button} from 'react-native';
import ChatListItem from './ChatListItem';

export default function ChatsList({navigation, chatsList}) {
  return (
    <ScrollView 
    showsHorizontalScrollIndicator={false}
    showsVerticalScrollIndicator={false}
    style={{ width : '100%'}}>
        {
        chatsList.map( message => <ChatListItem key={message.id} message={message} navigation={navigation} /> )
        }
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
