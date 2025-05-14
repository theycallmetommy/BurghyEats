import React, {useState, useEffect} from "react";
import { ScrollView, View } from "react-native";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import {FeedCardView} from "../../components/cardView";

type Post = {
  pfp: string;
  username: string;
  postedAt: string;
  image: string;
  desc: string;
  likes: number;
  comments: number;
}

export default function Feed() {

    const [posts, setPosts] = useState<Post[]>([]);
    
        const fetchPosts = async () => {
            await fetch('http://127.0.0.1:8000/api/foodshare/', {method:'GET'})
            .then(data => data.json())
            .then((data) => {
                setPosts(data)
            })
            .catch(err => console.error(err));
        };
    
        useEffect(() => {
            fetchPosts();
        }, []);

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView style={{ flexGrow: 1 }}>
                    <View style={{ display: 'flex', gap: 15 }}>
                        {posts.map((post, index) => (
                                <FeedCardView
                                key={index}
                                    pfp={post.pfp}
                                    username={post.username}
                                    postedAt={post.postedAt}
                                    image={post.image}
                                    description={post.desc}
                                    likes={post.likes}
                                    comments={post.comments}
                                />
                        ))}
                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}