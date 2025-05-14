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
    
        const hposts = [
            {
              pfp: "https://avatar.iran.liara.run/public",
              username: "John Doe",
              postedAt: "2hr",
              image: "https://images.unsplash.com/photo-1505935428862-770b6f24f629?q=80&w=1167&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sodales nunc quis turpis porttitor, at placerat magna rutrum. Nulla nec nisl nisl. Nullam ut accumsan tellus.",
              tags: ['free', 'vegan', 'free', 'vegan', 'free', 'vegan', 'free', 'vegan'], likes: 173, comments: 0,
            },
            {
              pfp: "https://avatar.iran.liara.run/public",
              username: "John Doe",
              postedAt: "2hr",
              image: "https://images.unsplash.com/photo-1598514982901-ae62764ae75e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sodales nunc quis turpis porttitor, at placerat magna rutrum. Nulla nec nisl nisl. Nullam ut accumsan tellus. Phasellus vitae lectus porttitor, tincidunt dolor in, faucibus enim. Nulla vestibulum pretium ipsum non cursus. Donec vel tristique elit, in vehicula quam. Pellentesque luctus.",
              tags: ['free'], likes: 3, comments: 57,
            },
            {
              pfp: "https://avatar.iran.liara.run/public",
              username: "John Doe",
              postedAt: "2hr",
              image: "https://images.unsplash.com/photo-1673006768485-3b590a2fa8fb?q=80&w=965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sodales nunc quis turpis porttitor, at placerat magna rutrum. Nulla nec nisl nisl. Nullam ut accumsan tellus. Phasellus vitae lectus porttitor, tincidunt dolor in, faucibus enim. Nulla vestibulum pretium ipsum non cursus. Donec vel tristique elit, in vehicula quam. Pellentesque luctus.",
              tags: ['free'], likes: 0, comments: 0,
            },
            {
              pfp: "https://avatar.iran.liara.run/public",
              username: "John Doe",
              postedAt: "2hr",
              image: "https://images.unsplash.com/photo-1542444256-164bd32f11fc?q=80&w=1005&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sodales nunc quis turpis porttitor, at placerat magna rutrum. Nulla nec nisl nisl. Nullam ut accumsan tellus. Phasellus vitae lectus porttitor, tincidunt dolor in, faucibus enim. Nulla vestibulum pretium ipsum non cursus. Donec vel tristique elit, in vehicula quam. Pellentesque luctus.",
              tags: ['free'], likes: 0, comments: 0,
            },
            {
              pfp: "https://avatar.iran.liara.run/public",
              username: "John Doe",
              postedAt: "2hr",
              image: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sodales nunc quis turpis porttitor, at placerat magna rutrum. Nulla nec nisl nisl. Nullam ut accumsan tellus. Phasellus vitae lectus porttitor, tincidunt dolor in, faucibus enim. Nulla vestibulum pretium ipsum non cursus. Donec vel tristique elit, in vehicula quam. Pellentesque luctus.",
              tags: ['free'], likes: 0, comments: 0,
            },
            {
              pfp: "https://avatar.iran.liara.run/public",
              username: "John Doe",
              postedAt: "2hr",
              image: "https://images.unsplash.com/photo-1494390248081-4e521a5940db?q=80&w=1106&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sodales nunc quis turpis porttitor, at placerat magna rutrum. Nulla nec nisl nisl. Nullam ut accumsan tellus. Phasellus vitae lectus porttitor, tincidunt dolor in, faucibus enim. Nulla vestibulum pretium ipsum non cursus. Donec vel tristique elit, in vehicula quam. Pellentesque luctus.",
              tags: ['free'], likes: 0, comments: 0,
            },
            {
              pfp: "https://avatar.iran.liara.run/public",
              username: "John Doe",
              postedAt: "2hr",
              image: "https://images.unsplash.com/photo-1670757781705-9b6cb1ad0ca6?q=80&w=1102&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sodales nunc quis turpis porttitor, at placerat magna rutrum. Nulla nec nisl nisl. Nullam ut accumsan tellus. Phasellus vitae lectus porttitor, tincidunt dolor in, faucibus enim. Nulla vestibulum pretium ipsum non cursus. Donec vel tristique elit, in vehicula quam. Pellentesque luctus.",
              tags: ['free'], likes: 0, comments: 0,
            },
            {
                pfp: "https://avatar.iran.liara.run/public",
                username: "John Doe",
                postedAt: "2hr",
                image: "https://images.unsplash.com/photo-1505935428862-770b6f24f629?q=80&w=1167&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sodales nunc quis turpis porttitor, at placerat magna rutrum. Nulla nec nisl nisl. Nullam ut accumsan tellus.",
                tags: ['free', 'vegan', 'free', 'vegan', 'free', 'vegan', 'free', 'vegan'], likes: 173, comments: 0,
            },
            {
            pfp: "https://avatar.iran.liara.run/public",
            username: "John Doe",
            postedAt: "2hr",
            image: "https://images.unsplash.com/photo-1598514982901-ae62764ae75e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sodales nunc quis turpis porttitor, at placerat magna rutrum. Nulla nec nisl nisl. Nullam ut accumsan tellus. Phasellus vitae lectus porttitor, tincidunt dolor in, faucibus enim. Nulla vestibulum pretium ipsum non cursus. Donec vel tristique elit, in vehicula quam. Pellentesque luctus.",
            tags: ['free'], likes: 3, comments: 57,
            },
            {
            pfp: "https://avatar.iran.liara.run/public",
            username: "John Doe",
            postedAt: "2hr",
            image: "https://images.unsplash.com/photo-1673006768485-3b590a2fa8fb?q=80&w=965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sodales nunc quis turpis porttitor, at placerat magna rutrum. Nulla nec nisl nisl. Nullam ut accumsan tellus. Phasellus vitae lectus porttitor, tincidunt dolor in, faucibus enim. Nulla vestibulum pretium ipsum non cursus. Donec vel tristique elit, in vehicula quam. Pellentesque luctus.",
            tags: ['free'], likes: 0, comments: 0,
            },
        ];
        

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