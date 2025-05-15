import React, { useEffect, useState} from "react";
import { ScrollView, Text, View, Image, StyleSheet } from "react-native";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { useLocalSearchParams } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

import { ItemCardView } from "../components/cardView";
import { Divider } from 'react-native-elements'; // or from '@rneui/themed'

import { useCart } from '../context/cartContext';



export default function Menu() {
    const { location } = useLocalSearchParams();
    const [menuItems, setMenuItems] = useState([]);
    const [locationData, setLocationData] = useState(null);
    const { addToCart } = useCart();
    
    useEffect(() => {
        const fetchMenuItems = async () => {
            try {
                const res = await fetch(`http://137.142.185.249:8000/api/menuitem/?location=${location}`)
                const data = await res.json();
                setMenuItems(data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchMenuItems();

    }, [location])

    useEffect(() => {
        const fetchLocationDetails = async () => {
            try {
                const res = await fetch(`http://137.142.185.249:8000/api/locations/${location}/`);
                const data = await res.json();
                setLocationData(data);
            } catch (err) {
                console.error("Location fetch error:", err);
            }
        };

        if (location) {
            fetchLocationDetails();
        }
    }, [location]);

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{flex: 1}}>
                {locationData ? (
                    <View  style={styles.locHeader}>
                        <Image 
                            source={{ uri: locationData.image }} 
                            style={styles.headerImage} 
                        />
                        <LinearGradient
                        colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']}
                        style={styles.infoCard}
                        >
                            <Text style={{ color: '#fff', fontSize: 22, fontWeight: 700}}>{locationData.name}</Text>
                            <Text style={{ color: '#fff' }}>{locationData.loc}</Text>
                            <Text style={{ color: '#fff', marginTop: 15}}>
                                Open: {locationData.opens_at} — {locationData.closes_at}
                            </Text>
                        </LinearGradient>
                    </View>
                ) : (
                    <Text>Loading location...</Text>
                )}
                <ScrollView style={{flex: 1, marginVertical: 15}}>

                    {menuItems.map((item, index) => (
                        <View key={index}>
                            <ItemCardView
                             name={item.name}
                             description={item.description}
                             price={item.price}
                             image={item.image}
                             meal_swipe_elegible={item.meal_swipe_elegible}
                             onPress={() => addToCart(item.id)}
                            />
                            {index < menuItems.length - 1 && <Divider width={1} />}
                        </View>
                    ))}
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    locHeader: {
        position: 'relative',
        width: '100%',
        overflow: 'visible',
    },
    infoCard: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        alignItems: 'center',
        paddingVertical: 15
    },
    headerImage: {
        width: '100%',
        aspectRatio: 16/9,
        resizeMode: 'cover',
        },
})