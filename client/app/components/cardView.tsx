import React from 'react';
import { View, Text, Image, StyleSheet, TouchableHighlight } from 'react-native';
import { Button } from 'react-native-elements';
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
        <TouchableHighlight onPress={onPress} style={[cardViewStyles.cardMini]}>
            <View style={[diningStyles.cardContent]}>
              <Image style={{aspectRatio: 2/1, width: '100%'}} source={{ uri: image}} />
              <View style={diningStyles.infoBox}>
                  <View style={[diningStyles.detailsBox, {marginTop: 0, marginBottom: 0, gap: 10,}]}>
                    <Text style={{fontWeight: 700, fontSize: 19}}>{name}</Text>
                    <Text style={{color: '#8C8279'}}>
                      <MaterialCommunityIcons name="map-marker-outline" size={12} color="#8C8279"/> {location} 
                    </Text>
                  </View>
                  <View style={diningStyles.detailsBox}>
                    <MaterialCommunityIcons name="star" size={12} color="black" style={diningStyles.review}/>
                    <Text style={diningStyles.review}>4.99</Text>
                    <Text style={[diningStyles.review, {color: '#8C8279', fontWeight: 400, marginLeft: 5}]}>(271 reviews)</Text>
                  </View>
                  <TagList tags={["Sandwich", "Soup"]} scrollOverflow={false}/>
              </View>
            </View>
        </TouchableHighlight>
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
    cardMini: {
      padding: 0,
      marginLeft: 10,
      marginRight: 10,
      borderRadius: 10,
      overflow: 'hidden',
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

const diningStyles = StyleSheet.create({
  infoBox: {
    width: '100%',
    padding: 20,
    paddingLeft: 20,
    marginTop: -20,
    backgroundColor: '#EEECEB',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    borderRadius: 20,
    overflow: 'hidden',
  },
  detailsBox: {
    display: 'flex',
    flexDirection: 'row',
    gap: 3,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 15,
  },
  review: {
    fontSize: 15,
    fontWeight: 600,
  }
});
  
export { LocationCardView, FeedCardView };