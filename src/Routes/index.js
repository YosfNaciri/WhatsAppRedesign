import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import BottomNavigation from './BottomNavigation';
import Profile from '../screens/Profile';
import Chat from '../screens/Chat';
import Calling from '../screens/Calling';


function getHeaderTitle(route) {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Messages';
    switch (routeName) {
      case 'Messages':
        return 'Messages';
      case 'Calls':
        return 'Calls';
      case 'Settings':
        return 'Settings';
    }
  }

const Stack = createStackNavigator();

export default function Routes() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="BottomNavigation"
          screenOptions={{gestureEnabled: false}}>
          <Stack.Screen
            name="BottomNavigation"
            component={BottomNavigation}
            options={({ route }) => ({
                headerTitle: getHeaderTitle(route),
            })}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
          />
          <Stack.Screen
            name="Chat"
            component={Chat}
          />
          <Stack.Screen
            name="Calling"
            component={Calling}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
}
