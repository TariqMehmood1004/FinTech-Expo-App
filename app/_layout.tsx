import React from 'react';
import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Layout = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }} >
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="(tabs)" />
            </Stack>
        </GestureHandlerRootView>
    );
};

export default Layout;