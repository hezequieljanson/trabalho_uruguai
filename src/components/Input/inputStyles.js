import { StyleSheet } from 'react-native';
import { themes } from '@/styles/theme/index';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: themes.colors.blue[500],
    borderRadius: 15,
    paddingHorizontal: 10,
    margin: 10,
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: themes.colors.white,
    borderRadius: 15,
  },
  icon: {
    marginRight: 10,
    height: 20,
  },
});
