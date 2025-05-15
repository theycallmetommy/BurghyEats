import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { CartProvider } from '../context/cartContext'; // adjust the path if needed

export default function Layout() {
  return (
    <SafeAreaProvider>
      <CartProvider>
        <Stack screenOptions={{ headerShown: false }} />
      </CartProvider>
    </SafeAreaProvider>
  );
}