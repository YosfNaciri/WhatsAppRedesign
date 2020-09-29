import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Calls from '../screens/Calls';
import Messages from '../screens/Messages';
import Settings from '../screens/Settings';
import * as color from '../styles/Style';
import Icon from 'react-native-vector-icons/Feather'

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <Tab.Navigator 
        initialRouteName="Messages"
        screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;
  
              if (route.name === 'Calls') {
                iconName = 'phone';
              } else if (route.name === 'Messages') {
                iconName = 'message-circle';
              } else if (route.name === 'Settings') {
                iconName = 'settings';
              }

              return <Icon name={iconName} size={size} color={color} />;
            },
          })}
        tabBarOptions={{
            activeTintColor: color.systemGreen,
            inactiveTintColor: color.secondGrey,
            showLabel : false,
          }}
    >
      <Tab.Screen name="Calls" component={Calls} />
      <Tab.Screen name="Messages" component={Messages} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}