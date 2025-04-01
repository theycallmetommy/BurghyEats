import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

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
    title: string;
    description?: string;
    onPress: () => void;
}

const LocationCardView: React.FC<LocationCardProps> = ({ image, name, location, hours, open, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.card}>
            <Image source={{ uri: image}} style={styles.image} />
            <View style={styles.content}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.title}>{location}</Text>
                <Text style={styles.title}>{open ? "Open" : "Closed"} {hours && `• ${hours}`}</Text>
            </View>
        </TouchableOpacity>
    );
};

const FeedCardView: React.FC<FeedCardProps> = ({ pfp, username, postedAt, image, title, description, onPress }) => {
  return (
      <TouchableOpacity onPress={onPress} style={styles.card}>
          <View style={{ flexDirection: 'row', padding: 10}}>
            <Image style={{ width: 40, height: 40, marginRight: 10}} source={{ uri: pfp}}/>
            <Text>{username}</Text>
            <Text>{postedAt}</Text>
          </View>
          <Image source={{ uri: image}} style={styles.image} />
          <View style={styles.content}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.title}>{description}</Text>
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
      height: 150,
    },
    content: {
      padding: 10,
    },
    title: {
      fontSize: 18,
      fontWeight: '600',
      marginBottom: 5,
    },
    description: {
      fontSize: 14,
      color: '#666',
    },
  });
  
export { LocationCardView, FeedCardView};