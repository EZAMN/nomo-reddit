import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {TouchableHighlight, View, Image, Text} from 'react-native';
import literals from '../../../config/literals';
import styles from './styles';

// Component to render a post item in the post list
const Post = ({post, onPress}) => {
  const image =
    typeof post.item.data.thumbnail !== 'undefined' &&
    post.item.data.thumbnail !== 'self' ? (
      <Image
        source={{uri: post.item.data.thumbnail}}
        resizeMode="contain"
        style={styles.image}
      />
    ) : (
      <></>
    );

  return (
    <TouchableHighlight onPress={onPress} style={styles.button}>
      <View style={styles.wrapper}>
        {image}
        <View style={styles.container}>
          <Text style={styles.date}>
            {moment.unix(post.item.data.created_utc).fromNow()}
          </Text>
          <Text style={styles.title}>{post.item.data.title}</Text>
          <View style={styles.footer}>
            <Text style={styles.toe}>/u/{post.item.data.author}</Text>
            <Text style={styles.toe}>
              {post.item.data.score} {literals.score}
            </Text>
            <Text style={styles.toe}>
              {post.item.data.num_comments} {literals.comments}
            </Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default Post;

Post.propTypes = {
  post: PropTypes.object.isRequired,
  onPress: PropTypes.func,
};
