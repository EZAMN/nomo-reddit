import React from 'react';
import PropTypes from 'prop-types';
import {View, TouchableOpacity, Picker, Image} from 'react-native';
import literals from '../../../config/literals';
import styles from './styles';

// Component to render the application Toolbox
const Toolbox = ({onPress, selectedSort, onSortChange}) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require('./images/refresh.png')}
      />
    </TouchableOpacity>
    <Picker
      selectedValue={selectedSort}
      style={styles.picker}
      onValueChange={onSortChange}>
      <Picker.Item label={literals.Top} value="top" />
      <Picker.Item label={literals.New} value="new" />
      <Picker.Item label={literals.Hot} value="hot" />
      <Picker.Item label={literals.Controversial} value="controversial" />
    </Picker>
  </View>
);

Toolbox.propTypes = {
  onPress: PropTypes.func,
  selectedSort: PropTypes.string,
  onSortChange: PropTypes.func,
};

export default Toolbox;
