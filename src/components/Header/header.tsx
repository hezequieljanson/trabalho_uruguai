import React from 'react';
import styles from './headerStyles';
import { View, Image } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.iconContainer}></View>
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/images/Logo1.jpg')} style={styles.logo} />
      </View>
      <View style={styles.profileContainer}>
        <Image source={require('../../assets/images/Perfil.jpg')} style={styles.profile} />
      </View>
    </View>
  );
};

export default Header;
