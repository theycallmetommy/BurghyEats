import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Button } from 'react-native';
import Feather  from "@expo/vector-icons/Feather";

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
    onPress: () => void;
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

const FeedCardView: React.FC<FeedCardProps> = ({ pfp, username, postedAt, image, description, onPress }) => {
  return (
      <TouchableOpacity onPress={onPress} style={styles.card}>
          <View style={{ flexDirection: 'row', padding: 10}}>
            <Image style={{ width: 40, height: 40, marginRight: 10}} source={{ uri: pfp}}/>
            <Text style={[styles.defaultText, { marginTop: 12, fontWeight: 'bold'}]}>{username}</Text>
            <Text style={styles.defaultText}>{postedAt}</Text>
          </View>
          <View style={styles.content}>
              <Text style={styles.defaultText}>{description}</Text>
          </View>
          <Image source={{ uri: image}} style={styles.image} />
          <View style={{
            flexDirection: 'row',}}>
            <Button title='Like'/>
            <Button title='Chat'/>
            <Button title='Comment'/>
          </View>
      </TouchableOpacity>
  );
};

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