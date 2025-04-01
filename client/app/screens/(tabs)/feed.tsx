import React from "react";
import { ScrollView, Text, View } from "react-native";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import {FeedCardView} from "../../components/cardView";

export default function Feed() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView style={{ flexGrow: 1 }}>
                    <FeedCardView
                        pfp="https://avatar.iran.liara.run/public"
                        username="John Doe"
                        image="https://images.unsplash.com/photo-1505935428862-770b6f24f629?q=80&w=1167&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        title="Card 1"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sodales nunc quis turpis porttitor, at placerat magna rutrum. Nulla nec nisl nisl. Nullam ut accumsan tellus. Phasellus vitae lectus porttitor, tincidunt dolor in, faucibus enim. Nulla vestibulum pretium ipsum non cursus. Donec vel tristique elit, in vehicula quam. Pellentesque luctus."
                        onPress={() => console.log("Card 1 pressed")} />
                    <FeedCardView
                        image="https://images.unsplash.com/photo-1598514982901-ae62764ae75e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        title="Card 1"
                        onPress={() => console.log("Card 1 pressed")} />
                    <FeedCardView
                        image="https://images.unsplash.com/photo-1673006768485-3b590a2fa8fb?q=80&w=965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        title="Card 1"
                        onPress={() => console.log("Card 1 pressed")} />
                    <FeedCardView
                        image="https://images.unsplash.com/photo-1542444256-164bd32f11fc?q=80&w=1005&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        title="Card 1"
                        onPress={() => console.log("Card 1 pressed")} />
                    <FeedCardView
                        image="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        title="Card 1"
                        onPress={() => console.log("Card 1 pressed")} />
                    <FeedCardView
                        image="https://images.unsplash.com/photo-1494390248081-4e521a5940db?q=80&w=1106&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        title="Card 1"
                        onPress={() => console.log("Card 1 pressed")} />
                    <FeedCardView
                        image="https://images.unsplash.com/photo-1670757781705-9b6cb1ad0ca6?q=80&w=1102&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        title="Card 1"
                        onPress={() => console.log("Card 1 pressed")} />
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}