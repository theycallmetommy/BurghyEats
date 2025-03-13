import { Stack, Tabs } from 'expo-router';
import { useState } from 'react';
import Home from './(tabs)/home';


export default function Layout() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    return isAuthenticated ? (
        <Tabs screenOptions={{ headerShown: false }}>
            <Tabs.Screen name="./(tabs)/home" options={{ title: "Home", headerShown: false}} />
        </Tabs>
    ) : (
        <Stack>
            <Stack.Screen name='(auth)/login' options={{ title: "Login", headerShown: false}} />
            <Stack.Screen name='(auth)/signup' options={{ title: "Signup", headerShown: false}} />
        </Stack>
    )
}