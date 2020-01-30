import React from 'react';
import {View, Image} from 'react-native';
import styles from './styles';

// Component to render the application header which holds the logo
const Header = () => (
  <View style={styles.container}>
    <Image
      style={styles.logo}
      resizeMode="contain"
      source={{
        uri:
          'https://logos-download.com/wp-content/uploads/2016/06/Reddit_logo_full_1.png',
      }}
    />
  </View>
);

export default Header;
