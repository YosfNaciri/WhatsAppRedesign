import React from 'react';
import {StyleSheet} from 'react-native';
import { ListItem, colors} from 'react-native-elements';
import * as style from '../../styles/Style';
import UserAvatar from '../UserAvatar';
import ChatIndicator from './ChatIndicator';


export default function ChatListItem({navigation, message}) {
  return (
    <ListItem topDivider >
        <UserAvatar  contact={message.contact} size={70} />
        <ListItem.Content >
          <ListItem.Title style={styles.title}>{message.contact.name}</ListItem.Title>
          <ListItem.Subtitle style={styles.subTutle} numberOfLines={2}>{message.lastMsg}</ListItem.Subtitle>
        </ListItem.Content>
       < ChatIndicator totalNew={message.totalNew} />
        
      </ListItem>
  );
}

const styles = StyleSheet.create({
    title:{
        fontFamily: style.mediumFont,
        color : style.primaryBlack
    },
    subTitle:{
        fontFamily: style.regularFont,
        color : style.secondGrey
    }
});
