import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './inputStyles';
import { View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { themes } from '@/styles/theme';

type inputProps = {
  name: string;
  icon: string;
  isPassword: boolean;
  isEmail: boolean;
};

export default function Input(props: inputProps) {
  return (
    <View style={styles.container}>
      <Icon name={props.icon} size={20} color="gray" style={styles.icon} />
      <TextInput
        placeholder={props.name}
        placeholderTextColor={themes.colors.black}
        style={styles.input}
        secureTextEntry={props.isPassword}
        keyboardType={props.isEmail ? 'email-address' : 'default'}
      />
    </View>
  );
}
