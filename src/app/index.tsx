import React from 'react';
import AuthStack from '../routes/stackRoutes';
import Tabs from '../routes/tabRoutes';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { AuthProvider, useAuth } from '@/context/authContext';

function AppNavigation() {
  const { isSignedIn } = useAuth();
  return isSignedIn ? <Tabs /> : <AuthStack />;
}

export default function Layout() {
  return (
    <GestureHandlerRootView>
      <AuthProvider>
        <StatusBar style="dark" />
        <AppNavigation />
      </AuthProvider>
    </GestureHandlerRootView>
  );
}
