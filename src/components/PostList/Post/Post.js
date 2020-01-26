import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {TouchableHighlight, View, Image, Text} from 'react-native';
import literals from '../../../config/literals';

// Component to render a post item in the post list
const Post = ({post, onPress}) => {
  return (
    <TouchableHighlight onPress={onPress}>
      <View>
        <Image source={post.data.thumbnail} />
        <View>
          <Text>{moment(post.data.created).fromNow()}</Text>
          <Text>{post.data.title}</Text>
          <View>
            <Text>/u/{post.data.author}</Text>
            <Text>
              {post.data.score} {literals.score}
            </Text>
            <Text>
              {post.data.num_comments} {literals.comments}
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
