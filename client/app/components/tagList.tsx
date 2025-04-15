import React, { useRef, useState } from 'react';
import { ScrollView, View, Text, StyleSheet, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';

interface TagListProps {
  tags: string[];
  scrollOverflow?: boolean;
}

const TagList: React.FC<TagListProps> = ({ tags, scrollOverflow = true }) => {
  const [atEnd, setAtEnd] = useState(false);
  const scrollRef = useRef<ScrollView>(null);

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { contentOffset, layoutMeasurement, contentSize } = e.nativeEvent;
    const scrolledToEnd = contentOffset.x + layoutMeasurement.width >= contentSize.width - 10;

    setAtEnd(scrolledToEnd);
  };

  return (
    <View style={scrollOverflow ? { marginHorizontal: -20 } : undefined}>
      <ScrollView
        ref={scrollRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        contentContainerStyle={{
          paddingLeft: scrollOverflow ? 20 : 0,
          paddingRight: scrollOverflow && atEnd ? 20 : 0, // Add margin only when scrolled to end
        }}
      >
        {tags.map((tag, index) => (
          <View
            key={index}
            style={[
              styles.tag,
              { marginRight: index === tags.length - 1 ? 0 : 10, marginTop: scrollOverflow ? 15: 0 },
            ]}
          >
            <Text style={styles.tagText}>{tag}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    tag: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#f7c16a',
        borderRadius: 8,
        padding: 8,
        paddingLeft: 15,
        paddingRight: 15,
    },
    tagText: {
        fontSize: 14,
        color: '#000',
    },
});

export default TagList;