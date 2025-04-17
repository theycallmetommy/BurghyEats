import React, {useState, useEffect} from "react";
import { ScrollView, Text, View, } from "react-native";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import {DBLocationCardView, LocationCardView} from "../../components/cardView";
import axios from "axios";
import { FlatList } from "react-native-gesture-handler";

/*fetch("http://127.0.0.1:8000/api/menu/")
.then(response => response.json())
.then(data => {
    console.log(data);
})
.catch(error => console.log(error));

const fetchMenus = async () => {
    let response = await axios.get("api/menu/");

    return response.data;
};*/

type Menu = {
    id: string;
    name: string;
    loc: string;
    status: boolean;
    hours: string;
}

const dbtest = [[{"id":1,"name":"Kent Cafe","loc":"Kent Hall","status":true,"hours":"11am-5pm"},{"id":2,"name":"Einstein Bros","loc":"Hawkins Hall","status":false,"hours":"9am-3pm"}]]

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
    const [menus, setMenus] = useState<Menu[]>([]);

    const fetchMenus = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/work/', {method:'GET'});
            const data = await response.json();
            setMenus(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchMenus();
    }, []);

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView style={{flexGrow: 1}}>
                    <View style={{display: 'flex', gap: 15}}>
                        {dbtest.map((menu) => (
                            <LocationCardView
                                key={menu.id}
                                name = {menu.name}
                                image={"https://images.compassdigital.org/424a9b5e4c7947eb9a04655f5903fe551728490601342.png"}
                                location={menu.loc}
                                open={menu.status}
                                hours={menu.hours}
                                onPress={() => console.log(`Pressed ${menu.name}`)}
                            />
                        ))}
                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}