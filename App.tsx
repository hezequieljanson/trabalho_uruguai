import Layout from '@/app/index';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from '@/context/authContext';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AuthProvider>
        <NavigationContainer>
          <Layout />
        </NavigationContainer>
      </AuthProvider>
    </GestureHandlerRootView>
  );
}
