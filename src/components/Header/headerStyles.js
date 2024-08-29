import { themes } from '@/styles/theme/index';
import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');
const SPACING = 10;

export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SPACING,
    backgroundColor: themes.colors.white,
    height: height * 0.1,
  },
  iconContainer: {
    marginLeft: SPACING,
    marginRight: SPACING / 2,
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
  },
  profileContainer: {
    marginRight: SPACING,
    marginLeft: SPACING / 2,
  },
  icon: {
    height: 30,
    width: 30,
  },
  logo: {
    height: '150%',
    aspectRatio: 1,
    resizeMode: 'contain',
  },
  profile: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginBottom: 5,
  },
});
