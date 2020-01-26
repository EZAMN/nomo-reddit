import React from 'react';
import {View, Image} from 'react-native';
import styles from './styles';

// Component to render the application header
const Header = () => (
  <View style={styles.container}>
    <Image
      resizeMode="contain"
      styles={styles.logo}
      source={require('./images/logo.png')}
    />
  </View>
);

export default Header;
