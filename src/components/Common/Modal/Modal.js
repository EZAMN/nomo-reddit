import React from 'react';
import {Modal, TouchableOpacity, View, Text} from 'react-native';
import styles from './styles';

//Component used to show modals on the application
const CustomModal = ({isVisible, hide, children}) => {
  return (
    <Modal
      animationType={'slide'}
      transparent={true}
      visible={isVisible}
      onRequestClose={() => {}}>
      <View style={styles.background} />
      <View style={styles.container}>
        <View style={styles.toolbox}>
          <TouchableOpacity onPress={hide} style={styles.button}>
            <Text>X</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.modal}>{children}</View>
      </View>
    </Modal>
  );
};

export default CustomModal;
