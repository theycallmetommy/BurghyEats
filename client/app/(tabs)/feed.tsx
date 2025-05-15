import React, { useState, useEffect } from 'react';
import { ScrollView, View, Button, Text } from "react-native";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import {FeedCardView} from "../../components/cardView";
import { useRouter } from 'expo-router';


export default function Feed() {
  const [posts, setPosts] = useState([]);
  const router = useRouter();

  
  const fetchPosts = async () => {
    try {
      const res = await fetch('http://137.142.185.249:8000/api/posts/');
      const data = await res.json();
      setPosts(data);
    } catch (err) {
      console.error("Error fetching posts:", err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleLike = async (postId: number) => {
    try {
      const post = posts.find(p => p.id === postId);
      if (!post) return;

      const alreadyLiked = post.likes.includes(1); // still hardcoded for now
      const updatedLikes = alreadyLiked
        ? post.likes.filter((id: number) => id !== 1)
        : [...post.likes, 1];

      const res = await fetch(`http://137.142.185.249:8000/api/posts/${postId}/`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ likes: updatedLikes }),
      });

      if (res.ok) fetchPosts();
    } catch (err) {
      console.error("Failed to like post", err);
    }
  };



    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView style={{ flexGrow: 1 }}>
                    <View style={{ display: 'flex' }}>
                        {posts.map((post, index) => (
                          <View key={post.id}>
                            <FeedCardView
                              pfp={"https://avatar.iran.liara.run/public"} // placeholder until user data is fetched
                              username={`User ${post.user}`} // replace with real username later
                              postedAt={new Date(post.posted_at).toLocaleDateString()}
                              image={post.image}
                              description={post.content}
                              likes={post.likes.length}
                              comments={0}
                              onLike={() => handleLike(post.id)}
                            />
                            {index < posts.length - 1 && (
                              <View style={{ height: 2, backgroundColor: '#ccc', marginVertical: 5 }} />
                            )}
                          </View>
                        ))}
                        <Button
                          title="+ Add Post"
                          onPress={() => router.push('/newPost')}
                          color="#CF102D"
                        />
                        <Text></Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}