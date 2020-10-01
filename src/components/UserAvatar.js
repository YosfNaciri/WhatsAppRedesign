import React from 'react';
import {StyleSheet, View } from 'react-native';
import {Avatar, Badge} from 'react-native-elements';

export default function UserAvatar({contact, size}) {
  if (contact.status === 'online') {
    return (
      <View>
        <Avatar size={size} rounded source={{uri: contact.avatar}} />
        <Badge
          status="success"
          badgeStyle={styles.badgeStyle}
          containerStyle={{position: 'absolute', bottom: 0, right: 2}}
        />
      </View>
    );
  }
  return (
    <View>
      <Avatar size={size} rounded source={{uri: contact.avatar}} />
    </View>
  );
}

const styles = StyleSheet.create({
    badgeStyle : {
        width: 20,
            height: 20,
            borderRadius: 50,
            borderColor: '#fff',
            borderWidth: 3,
    }
});
