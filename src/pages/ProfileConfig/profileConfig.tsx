import React from 'react';
import styles from './profileCStyle';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const ProfileConfig = () => {
  return (
    <View style={styles.container}>
      <View>
        <Icon name="edit" size={24} color="black" style={styles.editPhotoIcon} />
      </View>
      <View style={styles.topHalf}></View>
    </View>
  );
};

export default ProfileConfig;
