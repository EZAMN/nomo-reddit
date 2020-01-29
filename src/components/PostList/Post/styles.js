import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  button: {
    margin: 5,
  },
  wrapper: {
    backgroundColor: '#ddd',
    flexDirection: 'row',
    flex: 1,
    padding: 5,
    alignItems: 'flex-end',
  },
  title: {
    alignSelf: 'flex-start',
    paddingVertical: 10,
  },
  image: {
    flex: 1,
    flexGrow: 1,
    width: '100%',
    height: '100%',
    marginRight: 5,
  },
  container: {
    flex: 3,
    alignItems: 'flex-end',
  },
  footer: {
    flexDirection: 'row',
    flex: 1,
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  toe: {
    flex: 1,
    fontSize: 10,
    flexWrap: 'wrap',
  },
});

export default styles;
