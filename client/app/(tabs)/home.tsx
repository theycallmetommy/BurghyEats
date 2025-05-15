import React, {useState, useEffect} from "react";
import { ScrollView, Text, View, Button,} from "react-native";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { DBLocationCardView , LocationCardView} from "../../components/cardView";
import axios from "axios";
import { FlatList } from "react-native-gesture-handler";
import { useRouter } from 'expo-router';

type Menu = {
    image: string;
    id: string;
    name: string;
    loc: string;
    opens_at: string;
    closes_at: string;
}

const test = {image: "https://i.pinimg.com/736x/1f/95/6a/1f956a6a6bb3dd6a2ec653fc1d1bfd9e.jpg", name: "Hi Martin",loc: "Beaumont Lounge",status: true,hours: "3:30pm-4:45pm"}

const router = useRouter();
  
export default function Home() {
    const [menus, setMenus] = useState<Menu[]>([]);

    const fetchMenus = async () => {
        await fetch('http://137.142.185.249:8000/api/locations/', {method:'GET'})
        .then(data => data.json())
        .then((data) => {
            setMenus(data)
        })
        .catch(err => console.error(err));
    };

    useEffect(() => {
        fetchMenus();
    }, []);

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView style={{flexGrow: 1}}>
                    <View style={{ padding: 15 }}>
                        <Button title="Go to Checkout" onPress={() => router.push('/checkout')} />
                    </View>
                    <View style={{display: 'flex', gap: 15}}>
                        {menus.map((menu, index) => (
                            <LocationCardView
                                key={index}
                                image={menu.image}
                                name={menu.name}
                                loc={menu.loc}
                                opens_at={menu.opens_at}
                                closes_at={menu.closes_at}
                                onPress={() => router.push({
                                    pathname: "/menu",
                                    params: { location: menu.id}
                                })}
                            />
                        ))}
                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}