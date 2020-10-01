import React from 'react';
import {StyleSheet} from 'react-native';
import { ListItem} from 'react-native-elements';
import UserAvatar from '../UserAvatar';
import CallIndicator from './CallIndicator';
import * as style from '../../styles/Style'



export default function CallListItem({navigation, call}) {
  return (
    <ListItem topDivider >
        <UserAvatar  contact={call.contact} size={60} />
        <ListItem.Content >
          <ListItem.Title style={call.type === "Missed Call" ? styles.missedCallTitle : styles.Title}>{call.contact.name}</ListItem.Title>
          <ListItem.Subtitle style={call.type === "Missed Call" ? styles.missedCallSub : styles.Subtitle} numberOfLines={2}>{call.type}</ListItem.Subtitle>
        </ListItem.Content>
       < CallIndicator callFrq={call.callFrq} callType={call.type} />
      </ListItem>
  );
}

const styles = StyleSheet.create({
    missedCallTitle : {
        color : style.systemRed,
        fontFamily : style.mediumFont
    },
    missedCallSub : {
        color : style.systemRed,
        fontFamily : style.regularFont
    },
    Title : {
        color : style.firstBlack,
        fontFamily : style.mediumFont
    },
    Subtitle : {
        color : style.secondGrey,
        fontFamily : style.regularFont
    }
});
