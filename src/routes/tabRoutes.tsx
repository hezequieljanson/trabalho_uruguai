import React from 'react';
import Home from '@/pages/Home/home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileConfig from '@/pages/ProfileConfig/profileConfig';

export type TabParamList = {
  Home: undefined;
  Profile: undefined;
};
export default function Tabs() {
  const Tab = createBottomTabNavigator<TabParamList>();

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={ProfileConfig} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}
