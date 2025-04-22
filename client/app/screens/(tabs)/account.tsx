import React, { useState } from "react";
import { Text, View, Image, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { OrderCardView, WalletCard } from "../../components/cardView";

export default function Account() {
    const [activeTab, setActiveTab] = useState<'Orders' | 'Wallet' | 'Settings'>('Wallet');
    const exampleItems = [
        { name: 'Sandwich', qty: 2, price: 5.99 },
        { name: 'Salad',    qty: 1, price: 4.49 }
      ];

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={[style.infoContainer, {padding: 20}]}>
                    <Image source={{ uri: "https://avatar.iran.liara.run/public" }} width={65} height={65} />
                    <Text style={{ fontSize: 25, fontWeight: '600' }}>John Doe</Text>
                </View>

                {/* Top Tabs */}
                <View style={style.tabNav}>
                    {['Orders', 'Wallet', 'Settings'].map(tab => (
                        <TouchableOpacity
                            key={tab}
                            onPress={() => setActiveTab(tab as any)}
                            style={[
                                style.tabButton,
                                activeTab === tab && style.tabActive
                            ]}
                        >
                            <Text style={[
                                style.tabText,
                                activeTab === tab && style.tabTextActive
                            ]}>
                                {tab}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Content Area */}
                <ScrollView style={{ flexGrow: 1}}>
                    <View style={style.tabContent}>
                        {
                            activeTab === 'Orders' && 
                            <View style={{gap: 15}}>
                                <OrderCardView
                                orderId="123456"
                                location="Kent Cafe"
                                delivery={true}
                                readyAt="2023-10-01"
                                orderStatus="Delivered"
                                orderDate="2023-10-01"
                                orderTotal="$10.48"
                                items={exampleItems}
                                />
                                <OrderCardView
                                orderId="123456"
                                location="Einstein Bros"
                                delivery={true}
                                readyAt="2023-10-01"
                                orderStatus="Delivered"
                                orderDate="2023-10-01"
                                orderTotal="$10.48"
                                items={exampleItems}
                                />
                                <OrderCardView
                                orderId="123456"
                                location="Halal Shack"
                                delivery={true}
                                readyAt="2023-10-01"
                                orderStatus="Delivered"
                                orderDate="2023-10-01"
                                orderTotal="$10.48"
                                items={exampleItems}
                                />
                                <OrderCardView
                                orderId="123456"
                                location="Platts Pizza"
                                delivery={true}
                                readyAt="2023-10-01"
                                orderStatus="Delivered"
                                orderDate="2023-10-01"
                                orderTotal="$10.48"
                                items={exampleItems}
                                />
                                <OrderCardView
                                orderId="123456"
                                location="Tim Hortons"
                                delivery={true}
                                readyAt="2023-10-01"
                                orderStatus="Delivered"
                                orderDate="2023-10-01"
                                orderTotal="$10.48"
                                items={exampleItems}
                                />
                            </View>
                        }
                        {
                            activeTab === 'Wallet' && 
                            <ScrollView horizontal={true}>
                                <View style={{flexDirection: 'row', gap: 15}}>
                                    <WalletCard
                                        name="Meal Swipes"
                                        balance={100}
                                        mealSwipe
                                    />
                                    <WalletCard
                                        name="Dining Dollars"
                                        balance={503.02}
                                    />
                                    <WalletCard
                                        name="Cardinal Cash"
                                        balance={0}
                                    />
                                </View>
                            </ScrollView>
                        }
                        {activeTab === 'Settings' && <Text>Your Settings go here</Text>}
                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const style = StyleSheet.create({
    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
        marginBottom: 20
    },
    tabNav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 15
    },
    tabButton: {
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    tabText: {
        fontSize: 16,
        color: '#888',
        fontWeight: '700'
    },
    tabActive: {
        borderBottomWidth: 3,
        borderBottomColor: '#000',
    },
    tabTextActive: {
        color: '#000',
        fontWeight: '600'
    },
    tabContent: {
        padding: 15
    }
});
