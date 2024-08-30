import React from 'react';
import styles from './headerStyles';
import Icon from 'react-native-vector-icons/EvilIcons';
import { View, Image, TouchableOpacity } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <View style={styles.iconContainer}>
          <Icon name="bell" size={30} />
        </View>
      </TouchableOpacity>
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/images/Logo1.jpg')} style={styles.logo} />
      </View>
      <TouchableOpacity>
        <View style={styles.profileContainer}>
          <Image source={require('../../assets/images/Perfil.jpg')} style={styles.profile} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
