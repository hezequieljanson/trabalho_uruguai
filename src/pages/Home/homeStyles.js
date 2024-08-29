import { StyleSheet } from 'react-native';
import { themes } from '@/styles/theme/index';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.colors.white,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  text1: {
    fontSize: 35,
    fontFamily: themes.fontFamily.regular,
  },
  textBlack: {
    color: themes.colors.black,
  },
  textPurple: {
    color: themes.colors.purple[500],
  },
  text2: {
    fontSize: 20,
    color: themes.colors.neutral[300],
    fontFamily: themes.fontFamily.regular,
    marginBottom: 20,
  },
  barraPesquisaContainer: {
    marginBottom: 10,
  },
  pillsMenuContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 0.2,
  },
  masonryContainer: {
    marginTop: 20,
  },
});
