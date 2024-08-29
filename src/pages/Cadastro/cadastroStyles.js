import { StyleSheet } from 'react-native';
import { themes } from '@/styles/theme/index';

export default StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: themes.colors.white,
  },
  logo: {
    width: 120,
    height: 120,
  },
  text: {
    fontSize: 30,
    color: themes.colors.blue[500],
    fontFamily: themes.fontFamily.regular,
    paddingTop: 60,
    paddingBottom: 40,
  },
  thirdPartners: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    padding: 30,
  },
  buttonContainer: {
    height: 50,
    width: '60%',
    backgroundColor: themes.colors.blue[500],
    borderRadius: 20,
    alignItems: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    marginHorizontal: 0,
    overflow: 'hidden',
    alignItems: 'center',
  },
});
