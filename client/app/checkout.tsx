import { useCart } from '../context/cartContext';
import { useEffect, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { ItemCardView } from '../components/cardView';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { useMemo } from 'react';



export default function CheckoutScreen() {
    const { cartItems } = useCart();
    const [items, setItems] = useState<any[]>([]);
    
    const total = useMemo(() => {
      return items.reduce((sum, item) => sum + parseFloat(item.price), 0).toFixed(2);
    }, [items]);
    
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const results = await Promise.all(
          cartItems.map(id =>
            fetch(`http://137.142.185.249:8000/api/menuitem/${id}/`).then(res => res.json())
          )
        );
        setItems(results);
      } catch (err) {
        console.error('Failed to fetch items for cart', err);
      }
    };

    if (cartItems.length > 0) fetchItems();
  }, [cartItems]);

  return (
    <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={{ padding: 20 }}>
            {items.length === 0 ? (
                <Text>Your cart is empty.</Text>
            ) : (
                <View>
                    <Text style={{ fontSize: 18, fontWeight: 700, textAlign: 'center', paddingVertical: 15}}>Checkout</Text>
                    {items.map((item, index) => (
                    <View key={index} style={{ marginBottom: 15 }}>
                        <ItemCardView {...item} />
                    </View>
                    ))}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 20}}>
                        <Text style={{ fontSize: 18, fontWeight: '600', marginTop: 20 }}>
                            Total: ${total}
                        </Text>
                        <TouchableOpacity style={[styles.button, {flexDirection: 'row', alignItems: 'center', gap: 5}]}>
                            <Text>Pay</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
            </ScrollView>
        </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
    button: {
    backgroundColor: 'orange', 
    padding: 15, 
    alignSelf: 'flex-start',
    bottom: 0,
    borderRadius: 10,
    marginTop: 20
  }
})