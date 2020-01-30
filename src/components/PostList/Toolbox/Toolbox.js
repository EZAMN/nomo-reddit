import React from 'react';
import PropTypes from 'prop-types';
import {View, TouchableOpacity, Picker, Image} from 'react-native';
import literals from '../../../config/literals';
import styles from './styles';

// Component to render the application Toolbox which holds the refresh button and sorting change button
const Toolbox = ({onPress, selectedSort, onSortChange}) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={{
          uri:
            'https://icons.iconarchive.com/icons/custom-icon-design/mono-general-4/512/refresh-icon.png',
        }}
      />
    </TouchableOpacity>
    <Picker
      selectedValue={selectedSort}
      style={styles.picker}
      onValueChange={onSortChange}>
      <Picker.Item label={literals.top} value="top" />
      <Picker.Item label={literals.new} value="new" />
      <Picker.Item label={literals.hot} value="hot" />
      <Picker.Item label={literals.controversial} value="controversial" />
    </Picker>
  </View>
);

Toolbox.propTypes = {
  onPress: PropTypes.func,
  selectedSort: PropTypes.string,
  onSortChange: PropTypes.func,
};

export default Toolbox;
