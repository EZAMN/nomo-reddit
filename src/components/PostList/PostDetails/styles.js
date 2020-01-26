import EStyleSheet from 'react-native-extended-stylesheet';
import {StatusBar} from 'react-native';

const styles = EStyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    /*'@media_ios': {
          paddingTop: 20;
      },
      '@media_android' : {
          paddingTop: StatusBar.currentHeight
      }*/
  },
  logo: {
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  toolbox: {
    alignSelf: 'flex-end',
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
});

export default styles;
