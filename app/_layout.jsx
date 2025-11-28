import React from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { NotesProvider } from '../src/context/NotesContext';

export default function RootLayout() {
  return (
    <NotesProvider>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: '#020617' },
          headerTintColor: '#f9fafb',
          headerTitleStyle: { fontWeight: '600' },
          contentStyle: { backgroundColor: '#020617' },
        }}
      >
        <Stack.Screen name="index" options={{ title: 'EstuGrow' }} />
        <Stack.Screen name="create" options={{ title: 'Nueva nota' }} />
        <Stack.Screen name="note/[id]" options={{ title: 'Detalle' }} />
        <Stack.Screen name="edit/[id]" options={{ title: 'Editar nota' }} />
        <Stack.Screen name="about" options={{ title: 'Acerca de EstuGrow' }} />
      </Stack>
    </NotesProvider>
  );
}
