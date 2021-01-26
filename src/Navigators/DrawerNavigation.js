import React from 'react';
import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';

import BottomTabsNavigator from './BottomTabNavigation';
import DrawerContent from '../screens/DrawerContent';
import SearchScreen from '../screens/SearchScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props, navigation) => <DrawerContent {...props} />}>
      <Drawer.Screen name="hej" component={BottomTabsNavigator} />
      <Drawer.Screen name="Search" component={BottomTabsNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;