import { StyleSheet } from 'react-native';
import { themes } from '@/styles/theme/index';

export default StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 1,
    alignItems: 'center',
  },
  pill: {
    backgroundColor: themes.colors.purple[100],
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 80,
  },
  selectedPill: {
    backgroundColor: themes.colors.purple[400],
  },
  pillText: {
    color: themes.colors.neutral[100],
    fontFamily: themes.fontFamily.regular,
  },
  selectedPillText: {
    color: themes.colors.white,
  },
});
