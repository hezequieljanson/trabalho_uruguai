import React from 'react';
import styles from './loginContainerStyles';
import { View, ViewProps } from 'react-native';

type MyViewComponentProps = ViewProps & {
  children: React.ReactNode;
};

const loginContainer: React.FC<MyViewComponentProps> = ({ children, style, ...rest }) => {
  return (
    <View style={[styles.rectangle, style]} {...rest}>
      {children}
    </View>
  );
};

export default loginContainer;
