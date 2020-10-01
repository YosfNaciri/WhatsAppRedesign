import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import * as style from '../../styles/Style';
import {Avatar, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';


export default function StoryItem({story}) {
  if (story.name === 'New Story') {
    return (
      <View style={styles.container}>
        <Button
          ViewComponent={LinearGradient}
          buttonStyle={styles.newStory}
          linearGradientProps={{
            colors: [style.primaryGreen, style.primaryCyan],
            start: { x: 0, y: 1 },
            end: { x: 1, y: 0 },
          }}
          icon={
            <Icon
              name="plus"
              size = {20}
              color="white"
            />
          }
        />
        <Text numberOfLines={1} style={styles.text}>
          New Story
        </Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Avatar
        size={70}
        containerStyle={styles.avatar}
        rounded
        source={{
          uri: story.avatar,
        }}
      />
      <Text numberOfLines={1} style={styles.text}>
        {story.name}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom : 40,
    margin: 5,
    width: 75,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor : "#313131"
  },
  avatar: {
    borderWidth: 2,
    padding: 2,
    borderColor: style.systemGreen,
  },
  text: {
    paddingTop: 10,
    fontFamily: style.regularFont,
    color: style.secondGrey,
    fontFamily : style.regularFont
  },
  newStory: {
    borderRadius : 50,
    width : 70,
    height : 70,
    borderWidth: 3,
    borderColor: style.primaryWhite,
  },
});
