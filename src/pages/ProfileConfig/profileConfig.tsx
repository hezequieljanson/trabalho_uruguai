import React from 'react';
import styles from './profileCStyle';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const ProfileConfig = () => {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity style={styles.editPhotoIcon}>
          <Icon name="edit" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.topHalf}>
        <Text>Helou parte de cima!</Text>
      </View>
    </View>
  );
};

export default ProfileConfig;
