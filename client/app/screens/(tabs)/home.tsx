import React from "react";
import { ScrollView, Text, View } from "react-native";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import {LocationCardView} from "../../components/cardView";

const locations = [
    {
        image: "https://images.compassdigital.org/c5d61e82e3ab4f2a9d5b12e0b638db791728490779368.png",
        name: "Kent Cafe",
        location: "Kent Hall",
        open: true,
        hours: "11am - 5pm",
    },
    {
        image: "https://images.compassdigital.org/424a9b5e4c7947eb9a04655f5903fe551728490601342.png",
        name: "Einstein Bros",
        location: "Hawkins Hall",
        open: false,
        hours: "9am - 3pm",
    },
    {
        image: "https://images.compassdigital.org/e546df4d739348aeab576dc487198c1b1728490435207.png",
        name: "Halal Shack",
        location: "Burghys Dean",
        open: true,
        hours: "11am - 7:30pm",
    },
    {
        image: "https://images.compassdigital.org/7eb14c5dfb5b43e7b19c3f3b7ed46f471735968014639.png",
        name: "Plattsburgh Pizza Co.",
        location: "The Nest",
        open: true,
        hours: "9am - 3pm",
    },
    {
        image: "https://images.compassdigital.org/fecdc42d7cb84832981d34bc6ac04ce11736166571310.png",
        name: "True Burger",
        location: "The Nest",
        open: true,
        hours: "9am - 3pm",
    },
    {
        image: "https://images.compassdigital.org/49aebb1412da40639c4d83b3c42363581728490695747.png",
        name: "Tim Hortons",
        location: "Flint Commons",
        open: true,
        hours: "9am - 3pm",
    },
    {
        image: "https://images.compassdigital.org/6dc07c897e774d28bf6b2630b870abf51735968114795.png",
        name: "Crave",
        location: "The Nest",
        open: true,
        hours: "9am - 3pm",
    },
];
  
export default function Home() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView style={{flexGrow: 1}}>
                    <View style={{display: 'flex', gap: 15}}>
                        {locations.map((loc, index) => (
                            <LocationCardView
                                key={index}
                                image={loc.image}
                                name={loc.name}
                                location={loc.location}
                                open={loc.open}
                                hours={loc.hours}
                                onPress={() => console.log(`Pressed ${loc.name}`)}
                            />
                        ))}
                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}