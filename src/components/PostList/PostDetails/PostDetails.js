import React from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';
import styles from './styles';

//Component used to hold the webview to show a post pic
const PostDetails = ({url}) => {
  return (
    <View style={styles.container}>
      <WebView source={{uri: url}} style={styles.webView} />
    </View>
  );
};

export default PostDetails;
