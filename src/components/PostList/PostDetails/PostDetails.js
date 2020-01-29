import React from 'react';
import {WebView} from 'react-native-webview';
import styles from './styles';

const PostDetails = ({url}) => {
  return <WebView source={{uri: url}} style={styles.webView} />;
};

export default PostDetails;
