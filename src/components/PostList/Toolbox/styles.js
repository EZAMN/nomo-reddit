import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#eee',
  },
  image: {
    width: 70,
    height: 50,
    backgroundColor: '#fff',
    margin: 2,
    borderRadius: 10,
    alignSelf: 'center',
  },
  button: {
    flex: 1,
  },
  picker: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 2,
  },
});

export default styles;
