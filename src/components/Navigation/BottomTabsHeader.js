import React from 'react'

import * as style from '../../styles/Style';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'

import { StyleSheet } from 'react-native';
import GradiantIcon from '../GradiantIcon';

export default function BottomTabsNavigation({routeName}) {
    if (routeName === 'Calls') { 
      return  <GradiantIcon icon={<MaterialIcon name="add-call" size={28} style={{color : "black", marginRight : 10}} /> } />
    } else if (routeName === 'Messages') {
        return <GradiantIcon icon={<MaterialIcon name="group-add" size={28} style={{color : "black", marginRight : 10}} />} />
    } else if (routeName === 'Settings') {
        return <GradiantIcon icon={<MaterialCommunityIcon name="dots-horizontal" size={40} style={{color : "black", marginRight : 10}}/>} />
    }
    
}


const styles = StyleSheet.create({

    });
    