/*
Used example code from React Navigation documentation for custom tab bar
https://reactnavigation.org/docs/bottom-tab-navigator?config=dynamic

Modifications were made, but the base code is from the documentation.
*/

import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Text } from '@react-navigation/elements';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function CustomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
    const { colors } = useTheme();

    const getIcon = (routeName: string, isFocused: boolean) => {
        switch (routeName) {
            case 'Feed':
                return isFocused ? 'post' : 'post-outline';
            case 'Home':
                return isFocused ? 'home' : 'home-outline';
            case 'Account':
                return isFocused ? 'account-circle' : 'account-circle-outline';
            default:
                return 'help-outline';
        }
    };

  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;
        const iconName = getIcon(route.name, isFocused);

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
          
        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
                backgroundColor: '#CF7F00',
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}
          >
            <View style={{ alignItems: 'center' }}>
              <MaterialCommunityIcons name={iconName as keyof typeof MaterialCommunityIcons.glyphMap} size={24} color={isFocused ? '#00000' : '#EEECEB'} />
              <Text style={{ color: isFocused ? colors.primary : colors.text }}>
                {typeof label === 'string' ? label : null}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
    tabBar: {
        position: 'absolute',
        bottom: 30,
        left: 15,
        right: 15,
        flexDirection: 'row',
        backgroundColor: '#EEECEB',
        height: 100,
        borderRadius: 30,
        overflow: 'hidden',
    },
});

export default CustomTabBar;