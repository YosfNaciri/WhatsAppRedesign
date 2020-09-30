
import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView
} from 'react-native';
import StoryItem from './StoryItem'

const newStory = { "name": "New Story" }

export default function Stories({Stories}) {
    return (
            <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false} >
              <StoryItem story={newStory} />
              {Stories.map( story => <StoryItem key={story.id} story={story} /> )}
            </ScrollView>
    )
}

const styles = StyleSheet.create({
    
  });
  