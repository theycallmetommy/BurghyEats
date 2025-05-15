// app/newPost.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

export default function NewPost() {
  const [image, setImage] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async () => {
  try {
    const res = await fetch('http://137.142.185.249:8000/api/posts/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user: 1, // hardcoded ID
        image,
        content,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.log('ERROR:', data); // <-- shows what went wrong
      alert(`Post failed: ${JSON.stringify(data)}`);
    } else {
      alert('Post submitted!');
    }
  } catch (err) {
    console.error('Error posting:', err);
    alert('Network error');
  }
};

  return (
    <SafeAreaProvider>
        <SafeAreaView>
            <View style={styles.container}>
            <Text style={[styles.label, {fontSize: 20, textAlign: 'center', marginBottom: 50}]}>New Post</Text>
            <Text style={styles.label}>Image URL</Text>
            <TextInput
                style={styles.input}
                value={image}
                onChangeText={setImage}
                placeholder="Paste image URL"
            />

            <Text style={styles.label}>Post Content</Text>
            <TextInput
                style={[styles.input, { height: 100 }]}
                value={content}
                onChangeText={setContent}
                placeholder="Write something..."
                multiline
            />

            <Button title="Submit Post" onPress={handleSubmit} />
            </View>
        </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  label: { marginBottom: 5, fontWeight: 'bold' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
    padding: 10,
    borderRadius: 6,
  },
});