import React from 'react';
import Home from '@/pages/Home/home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export type TabParamList = {
  Home: undefined;
};
export default function Tabs() {
  const Tab = createBottomTabNavigator<TabParamList>();

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}
