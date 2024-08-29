import { StyleSheet } from 'react-native';
import { themes } from '@/styles/theme/index';

export default StyleSheet.create({
  rectangle: {
    borderTopLeftRadius: 80,
    borderBottomRightRadius: 80,
    alignItems: 'center',
    top: 50,
    height: 550,
    width: 350,
    paddingHorizontal: 30,
    backgroundColor: themes.colors.white,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 20.41,
    elevation: 24,
  },
});
