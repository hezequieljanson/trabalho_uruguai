import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  item: {
    marginBottom: 10,
    flex: 1,
    paddingHorizontal: 5,
  },
  image: {
    borderRadius: 10,
    resizeMode: 'cover',
  },
});
