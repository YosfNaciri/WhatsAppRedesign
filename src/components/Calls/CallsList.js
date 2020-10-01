import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import CallListItem from './CallsListItem';

export default function CallsList({navigation, calls}) {
  return (
    <ScrollView 
    showsHorizontalScrollIndicator={false}
    showsVerticalScrollIndicator={false}
    style={{ width : '100%'}}>
        {
        calls.map( call => <CallListItem key={call.id} call={call} navigation={navigation} /> )
        }
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
