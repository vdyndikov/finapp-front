import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { Costs } from './Funds/Costs';
import Earnings from './Funds/Earnigs';
import Settings from './Funds/Settings';
import Login from './Funds/Login';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Drawer.Navigator>
        <Drawer.Screen name='Login' component={Login}/>
        <Drawer.Screen name='Costs' component={Costs}/>
        <Drawer.Screen name='Earnings' component={Earnings}/>
        <Drawer.Screen name='Settings' component={Settings}/>
        
      </Drawer.Navigator>
      <StatusBar style="dark" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#11af92',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
