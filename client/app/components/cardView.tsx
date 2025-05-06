import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import DynamicImage from './dynamicImageAR';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import TagList from './tagList';
import OrderProgressBar from './orderProgressBar';

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

interface OrderCardProps {
  orderId: string;
  delivery: boolean;
  readyAt: string;
  location: string;
  orderStatus: string;
  orderDate: string;
  orderTotal: string;
  items: OrderItem[];
}

interface OrderItem {
  name: string;
  qty: number;
  price: number;
}

interface WalletInfo {
  name: string,
  balance: number,
  mealSwipe?: boolean,
  onPress: () => void,
  icon: string
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

const OrderCardView: React.FC<OrderCardProps> = ({ orderId, location, delivery, readyAt, orderStatus, orderDate, orderTotal, items }) => {
  const [expanded, setExpanded] = useState(false);
  
  return (
      <View style={orderCardStyles.card}>
        <View style={{flexDirection: 'row', gap: 15}}>
          <View>
            <Image style={{width: 100, aspectRatio: 1, borderRadius: 10}} source={{uri: "https://images.compassdigital.org/424a9b5e4c7947eb9a04655f5903fe551728490601342.png"}}/>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{fontSize: 15, fontWeight: 700, }}>{location}</Text>
            <View style={{flexDirection: 'row', gap: 15}}>
              <Text>{delivery? 'Delivery' : 'Pickup'}</Text>
              <Text>{readyAt}</Text>
            </View>
            {orderStatus !== 'delivered' && (
              <OrderProgressBar currentStatus={orderStatus} delivery={delivery} />
            )}
          </View>
        </View>

        {/* Acts as an accordion */}
        <TouchableOpacity
          onPress={() => setExpanded((e) => !e)}
          style={orderCardStyles.accordion}
        >
          <Text>
            {expanded
              ? 'Hide items'
              : `${items.length} item${items.length > 1 ? 's' : ''}`
            }
          </Text>
        </TouchableOpacity>

        {/* Becomes visible once onPress() from Touchable above is triggered */}
        {expanded && (
          <View style={{marginTop: 15}}>
            {items.map((item, i) => (
              <View key={i} style={orderCardStyles.expanded}>
                <Text>x{item.qty}</Text>
                <Text>{item.name}</Text>
                <Text style={{marginLeft: 'auto'}}>$ {item.price}</Text>
              </View>
            ))}
          </View>
        )}

        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 15, alignItems: 'center'}}>
          <Text style={{fontSize: 15}}>Total: {orderTotal}</Text>
          <TouchableOpacity style={[walletStyles.button, {position: 'relative', margin: 0}]}>
            <Text>Order Again</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
};

const WalletCard: React.FC<WalletInfo> = ({ name, balance, mealSwipe, onPress, icon }) => {
  return (
    <View style={walletStyles.card}>
      <View style={{alignItems: 'center'}}>
        <Text style={walletStyles.title}>{name} Balance</Text>
      </View>
      <View>
        <Text style={{fontSize: 28, marginLeft: 25}}>${balance.toFixed(2)}</Text>
      </View>
      <TouchableOpacity style={[walletStyles.button, {flexDirection: 'row', alignItems: 'center', gap: 5}]} onPress={onPress}>
        <MaterialCommunityIcons name={icon} size={24} color="black" />
        <Text>{mealSwipe? 'Change Plan' : 'Add money'}</Text>
      </TouchableOpacity>
    </View>
  );
};


// Styles
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

const orderCardStyles = StyleSheet.create({
  card: {
    padding: 15,
    borderRadius: 15,
    backgroundColor: '#dee1e1'
  },
  accordion: {
    backgroundColor: '#CF7F00',
    marginTop: 15,
    padding: 12,
    borderRadius: 8
  },
  expanded: {
    flexDirection: 'row',
    gap: 5

  },
});

const walletStyles = StyleSheet.create({
  card: {
    width: 300,
    aspectRatio: 3/2,
    borderRadius: 15,
    backgroundColor: '#c5cbc9'
  },
  title: {
    fontSize: 16,
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  button: {
    position: 'absolute',
    backgroundColor: 'orange', 
    padding: 15, 
    paddingLeft: 15,
    paddingRight: 15,
    alignSelf: 'flex-start',
    bottom: 0,
    margin: 25,
    borderRadius: 10
  }
});
  
export { LocationCardView, FeedCardView, OrderCardView, WalletCard };