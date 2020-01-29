import React from 'react';
import {Modal, Button, View} from 'react-native';
import styles from './styles';

const CustomModal = ({isVisible, hide, children}) => {
  return (
    <View style={styles.container}>
      <Modal
        animationType={'slide'}
        transparent={false}
        visible={isVisible}
        onRequestClose={() => {}}>
        <View style={styles.modal}>{children}</View>
      </Modal>
      <Button title="Close Post" onPress={hide} />
    </View>
  );
};

export default CustomModal;
