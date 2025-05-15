import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface Props {
    currentStatus: string;
    delivery: boolean;
}

const OrderProgressBar = ({ currentStatus, delivery }: Props) => {
    const steps = delivery? [
        { key: 'preparing', icon: 'chef-hat', label: 'Prep' },
        { key: 'picked', icon: 'truck-fast', label: 'Picked' },
        { key: 'delivered', icon: 'home-variant', label: 'Done' },
    ] : [
        { key: 'preparing', icon: 'chef-hat', label: 'Prep' },
        { key: 'ready', icon: 'bag-personal-outline', label: 'Ready' },
    ];
  
    const getColor = (stepKey: string) => {
        const order = steps.map((s) => s.key);
        const currentIndex = order.indexOf(currentStatus);
        const stepIndex = order.indexOf(stepKey);
        return stepIndex <= currentIndex ? '#FF3B30' : '#ccc';
    };
  
    return (
        <View style={styles.container}>
            {steps.map((step, i) => (
                <React.Fragment key={step.key}>
                    <View style={styles.step}>
                        <MaterialCommunityIcons
                            name={step.icon as any}
                            size={20}
                            color={getColor(step.key)}
                        />
                        <Text style={[styles.label, { color: getColor(step.key) }]}>
                            {step.label}
                        </Text>
                    </View>
                    {i < steps.length - 1 && (
                        <View
                            style={[
                                styles.line,
                                { backgroundColor: getColor(steps[i + 1].key) },
                            ]}
                        />
                    )}
                </React.Fragment>
            ))}
        </View>
    );
};  

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1
    },
    step: {
        flex: 1,
        alignItems: 'center',
    },
    label: {
        marginTop: 4,
        fontSize: 11,
    },
    line: {
        flex: 0.5,
        height: 2,
        backgroundColor: '#ccc',
      },
});

export default OrderProgressBar;