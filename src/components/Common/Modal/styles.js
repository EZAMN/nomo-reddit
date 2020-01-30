import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
    flex: 1,
    marginTop: 20,
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#666',
    opacity: 0.5,
    zIndex: 5,
  },
  modal: {
    flex: 1,
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#ddd',
    padding: 20,
    margin: 20,
    marginTop: 0,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    opacity: 1,
    width: '90%',
  },
  text: {
    color: '#3f2949',
    marginTop: 10,
  },
  toolbox: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'flex-end',
  },
  button: {
    width: 20,
    height: 20,
    backgroundColor: '#ddd',
    marginLeft: '90%',
    paddingHorizontal: 5,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#666',
  },
});
export default styles;
