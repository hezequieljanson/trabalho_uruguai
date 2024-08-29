import { StyleSheet } from 'react-native';
import { themes } from '@/styles/theme/index';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: themes.colors.neutral[100],
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 20,
    marginHorizontal: 1,
    marginTop: 20,
    shadowColor: themes.colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    width: '100%',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: themes.colors.neutral[500],
    fontFamily: themes.fontFamily.regular,
  },
});
