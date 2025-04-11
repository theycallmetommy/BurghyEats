import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import Feather  from "@expo/vector-icons/Feather";
import DynamicImage from './dynamicImageAR';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import TagList from './tagList';

interface LocationCardProps {
    image: string;
    name: string;
    location: string;
    hours?: string;
    open: boolean;
    onPress: () => void;
}

interface FeedCardProps {
    pfp: string;
    username: string;
    postedAt?: string;
    image: string;
    description?: string;
    tags: string[];
    likes: number;
    comments: number;
}

const LocationCardView: React.FC<LocationCardProps> = ({ image, name, location, hours, open, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.card}>
            <Image source={{ uri: image}} style={[styles.image, {aspectRatio: 2/1}]} />
            <View style={styles.content}>
                <Text style={[styles.defaultText, { fontWeight: 'bold', fontSize: 16}]}>{name}</Text>
                <Feather name="map-pin" size={12} color="black"/>
                <Text style={[styles.defaultText, { fontSize: 14}]}>{location}</Text>
                <Text style={styles.defaultText}>{open ? "Open" : "Closed"} {hours && `• ${hours}`}</Text>
            </View>
        </TouchableOpacity>
    );
};

const FeedCardView: React.FC<FeedCardProps> = ({ pfp, username, postedAt, image, description, tags, likes, comments }) => {
  return (
      <View style={cardViewStyles.card}>
          <View style={cardViewStyles.postInfo}>
            <View style={{display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center'}}>
              <DynamicImage width={40} uri={pfp}/>
              <Text style={{fontSize: 16, fontWeight: 500}}>{username}</Text>
            </View>
            <Text style={{display: 'flex', justifyContent: 'flex-end', color: 'grey', fontWeight: 600}}>{postedAt}</Text>
          </View>
          <View style={{marginBottom: 15}}>
              <Text style={{fontSize: 15}}>{description}</Text>
          </View>
          <DynamicImage uri={image}/>
          <TagList tags={tags}/>
          <View style={[cardViewStyles.buttonsContainer, {marginTop: 10}]}>
            <Button
              icon={
                <MaterialCommunityIcons 
                  name="heart-outline" 
                  size={24}
                  color="black"
                />
              }
              buttonStyle={{backgroundColor: 'transparent', gap: 5}}
              titleStyle={{color: 'black'}}
              title={likes.toString()}
            />
            <Button 
              icon={
                <MaterialCommunityIcons 
                  name="comment-outline" 
                  size={24}
                  color="black" 
                />
              }
              buttonStyle={{backgroundColor: 'transparent', gap: 5}}
              titleStyle={{color: 'black'}}
              title={comments.toString()}
            />
            <Button 
              icon={
                <MaterialCommunityIcons 
                  name="send-outline" 
                  size={24}
                  color="black" 
                />
              }
              buttonStyle={{backgroundColor: 'transparent', gap: 5}}
            />
          </View>
      </View>
  );
};

const cardViewStyles = StyleSheet.create({
    card: {
      display: 'flex',
      backgroundColor: '#0000',
      padding: 15,
      marginLeft: 5,
      marginRight: 5,
      borderRadius: 15,
    },
    postInfo: {
      display: 'flex',
      flexDirection: 'row',
      gap: 10,
      marginBottom: 15,
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    buttonsContainer: {
      display: 'flex',
      flexDirection: 'row',
      gap: 5,
    }
});

const styles = StyleSheet.create({
    card: {
      backgroundColor: '#fff',
      borderRadius: 10,
      overflow: 'hidden',
      margin: 10,
      // iOS shadow
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowRadius: 4,
      shadowOffset: { width: 0, height: 2 },
      // Android shadow
      elevation: 3,
    },
    image: {
      width: '100%',
      aspectRatio: 3 / 3, // Maintain a 16:9 aspect ratio for the image
      resizeMode: 'cover', // Cover the entire area of the image container
    },
    content: {
      padding: 10,
    },
    defaultText: {
      fontSize: 15,
      color: '#333',
      marginBottom: 5,
    },
    description: {
      fontSize: 14,
      color: '#666',
    },
});
  
export { LocationCardView, FeedCardView };