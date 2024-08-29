import React from 'react';
import styles from './masonryStyles';
import { FlatList, Image, TouchableOpacity } from 'react-native';

const MasonryLayout = () => {
  const data = [
    { id: '1', uri: require('../../assets/images/Dança.jpg'), width: 150, height: 180 },
    { id: '2', uri: require('../../assets/images/Bike.jpg'), width: 150, height: 200 },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity activeOpacity={0.8} style={styles.item} onPress={() => console.log('Pressed item:', item.id)}>
      <Image source={item.uri} style={[styles.image, { width: item.width, height: item.height }]} />
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
      numColumns={2}
      columnWrapperStyle={styles.columnWrapper}
    />
  );
};

export default MasonryLayout;
