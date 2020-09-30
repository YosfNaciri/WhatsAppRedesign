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
        {/* <Avatar
          size={90}
          containerStyle={styles.newStory}
          rounded
          icon={{name: 'plus', type: 'feather'}}
        /> */}
        
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
              size = {40}
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
        size={90}
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
    marginTop: 20,
    margin: 10,
    width: 100,
    height: 130,
    justifyContent: 'center',
    alignItems: 'center',
   // backgroundColor : "#313131"
  },
  avatar: {
    borderWidth: 3,
    padding: 3,
    borderColor: style.systemGreen,
  },
  text: {
    paddingTop: 10,
    fontFamily: style.regularFont,
    color: style.secondGrey,
  },
  newStory: {
    borderRadius : 50,
    width : 90,
    height : 90,
    borderWidth: 3,
    borderColor: style.primaryWhite,
  },
});
