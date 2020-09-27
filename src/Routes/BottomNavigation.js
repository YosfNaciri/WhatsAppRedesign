import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Calls from '../screens/Calls';
import Messages from '../screens/Messages';
import Settings from '../screens/Settings';

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <Tab.Navigator 
        initialRouteName="Messages"
    >
      <Tab.Screen name="Calls" component={Calls} />
      <Tab.Screen name="Messages" component={Messages} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}