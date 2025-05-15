import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function DepositBox() {
    const [text, setText] = useState('');
    const [selected, setSelected] = useState('Option 1');
    const [open, setOpen] = useState(false);
    const options = ['Option 1', 'Option 2', 'Option 3'];
    return (
        <View>
            <Text style={{ fontWeight: '600', fontSize: 18, marginBottom: 10, textAlign: 'center' }}>Add Money</Text>
            <View>
                <Text>Current Balance: $503</Text>
                <Text>Add money</Text>
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter an amount:"
                        value={text}
                        onChangeText={setText}

                    />
                </View>
                <Text>Deposit from: </Text>
                <View style={styles.wrapper}>
                    <TouchableOpacity onPress={() => setOpen(!open)} style={styles.dropdown}>
                        <Text>{selected}</Text>
                    </TouchableOpacity>

                    {open && (
                        <View style={styles.options}>
                        {options.map((option) => (
                            <TouchableOpacity
                            key={option}
                            onPress={() => {
                                setSelected(option);
                                setOpen(false);
                            }}
                            style={styles.option}
                            >
                            <Text>{option}</Text>
                            </TouchableOpacity>
                        ))}
                        </View>
                    )}
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        padding: 10
    },
    wrapper: {
        width: '80%',
        margin: 20,
      },
      dropdown: {
        padding: 12,
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: '#f2f2f2',
      },
      options: {
        borderWidth: 1,
        borderTopWidth: 0,
        borderRadius: 8,
        overflow: 'hidden',
      },
      option: {
        padding: 12,
        backgroundColor: 'white',
      },
})