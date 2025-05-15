// components/MealPlanSelector.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function MealPlanSelector() {
  const [selectedPlan, setSelectedPlan] = useState('planA'); // default to Platinum

  return (
    <View>
      <Text style={{ fontWeight: '600', fontSize: 18, marginBottom: 10, textAlign: 'center' }}>Select a Meal Plan</Text>
      {/* Replace with actual dropdown later */}
      <Picker 
        selectedValue={selectedPlan}
        onValueChange={(itemValue) => setSelectedPlan(itemValue)}>
        <Picker.Item label="Cardinal Platinum" value="planA" />
        <Picker.Item label="Cardinal Premium" value="planB" />
        <Picker.Item label="Cardinal Gold" value="planC" />
        <Picker.Item label="Cardinal Silver" value="planD" />
        <Picker.Item label="Cardinal Bronze" value="planE" />
      </Picker>
      <Text style={style.link}>More information on meal plans</Text>
    </View>
  );
}

const style = StyleSheet.create({
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
    textAlign: 'center'
  }
})

