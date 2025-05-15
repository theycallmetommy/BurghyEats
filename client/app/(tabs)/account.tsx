import React, { useState } from "react";
import { Text, View, Image, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { OrderCardView, WalletCard } from "../../components/cardView";
import { Divider } from '@rneui/themed';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

import MealPlanSelector from "../../components/mealPlanSelector";
import DepositBox from "../../components/depositBox";
import PopupCard from "../../components/popupCard";

const router = useRouter();

export default function Account() {
    const [activeTab, setActiveTab] = useState<'Orders' | 'Wallet'>('Orders');
    const exampleItems = [
        { name: 'Sandwich', qty: 2, price: 5.99 },
        { name: 'Salad',    qty: 1, price: 4.49 }
      ];

      const [popupVisible, setPopupVisible] = useState(false);
      const [popupType, setPopupType] = useState<'addPayment' | 'deposit' | 'changeMealPlan' | null>(null);
      
      const openPopup = (type: 'addPayment' | 'deposit' | 'changeMealPlan') => {
        setPopupType(type);
        setPopupVisible(true);
      };

    return (
        <View>
                <View style={[style.infoContainer, {padding: 20}]}>
                    <Image source={{ uri: "https://avatar.iran.liara.run/public" }} width={65} height={65} />
                    <View>
                        <Text style={{ fontSize: 25, fontWeight: '600' }}>John Doe</Text>
                        <Text style={{textDecorationLine: 'underline', textDecorationColor: 'blue', color: 'blue'}}>SUNY Plattsburgh</Text>

                    </View>
                </View>

                {/* Top Tabs */}
                <View style={style.tabNav}>
                    {['Orders', 'Wallet'].map(tab => (
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
                                orderStatus="picked"
                                orderDate="2023-10-01"
                                orderTotal="$10.48"
                                items={exampleItems}
                                />
                                <OrderCardView
                                orderId="123456"
                                location="Kent Cafe"
                                delivery={true}
                                readyAt="2023-10-01"
                                orderStatus="picked"
                                orderDate="2023-10-01"
                                orderTotal="$10.48"
                                items={exampleItems}
                                />
                                <OrderCardView
                                orderId="123456"
                                location="Kent Cafe"
                                delivery={true}
                                readyAt="2023-10-01"
                                orderStatus="picked"
                                orderDate="2023-10-01"
                                orderTotal="$10.48"
                                items={exampleItems}
                                />
                            </View>
                        }
                        {
                            activeTab === 'Wallet' &&
                            <View>
                                <ScrollView horizontal={true}>
                                    <View style={{flexDirection: 'row', gap: 15}}>
                                        <WalletCard
                                            name="Meal Swipes"
                                            balance={100}
                                            mealSwipe
                                            onPress={() => openPopup('changeMealPlan')}
                                            icon="swap-horizontal"
                                        />
                                        <WalletCard
                                            name="Dining Dollars"
                                            balance={503.02}
                                            onPress={() => openPopup('deposit')}
                                            icon="plus"
                                        />
                                        <WalletCard
                                            name="Cardinal Cash"
                                            balance={0}
                                            onPress={() => openPopup('changeMealPlan')}
                                            icon="plus"
                                        />
                                    </View>
                                </ScrollView>
                                <View>
                                    <Text style={{fontSize: 20, fontWeight: 600, marginTop: 15, marginBottom: 15}}>Payment Methods</Text>
                                    <View style={style.list}>
                                        <TouchableOpacity
                                            style={{ backgroundColor: 'lightgrey', flexDirection: 'row', justifyContent: "space-between", alignItems: 'center', padding: 15}}>
                                            <Text>Campus Card</Text>
                                            <MaterialCommunityIcons name="chevron-right" size={20}/>
                                        </TouchableOpacity>
                                        <Divider width={2.5} />
                                    </View>
                                    <TouchableOpacity style={[style.button, {flexDirection: 'row', alignItems: 'center', gap: 5}]}>
                                        <MaterialCommunityIcons name="plus" size={24} color="black" />
                                        <Text>Add payment method</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>
                        }
                    </View>
                </ScrollView>

                {popupVisible && (
                    <PopupCard visible={popupVisible} onClose={() => setPopupVisible(false)}>
                        {popupType === 'changeMealPlan' && <MealPlanSelector />}
                        {popupType === 'deposit' && <DepositBox />}
                    </PopupCard>
                )}

        </View>
    );
}

const style = StyleSheet.create({
    infoContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15,
        marginBottom: 5
    },
    tabNav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
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
    },
    list: {
        fontSize: 5,
        borderRadius: 10,
        overflow: 'hidden'
    },
    button: {
        backgroundColor: 'orange', 
        padding: 15, 
        paddingLeft: 15,
        paddingRight: 15,
        alignSelf: 'flex-start',
        bottom: 0,
        marginTop: 15,
        borderRadius: 10
    }
});
