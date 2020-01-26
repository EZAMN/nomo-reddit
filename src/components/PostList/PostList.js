/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Post from './Post';
import Toolbox from './Toolbox';
import {getPosts} from '../../actions';
import styles from './styles';

// Component to show the post list
// It changes shape and scroll direction depending on the loading page
const PostList = () => {
  const posts = useSelector(state => state.postList);
  const [page, setPage] = useState(1); // State to keep track of the last loaded page
  const [sort, setSort] = useState('hot'); // State to keep track of the last loaded page
  const dispatch = useDispatch();

  // Effect to load each new page on pagechange
  useEffect(() => {
    dispatch(getPosts(page, sort));
  }, [page]);

  const refresh = () => {
    setPage(1);
  };

  const loadMore = () => {
    setPage(page + 1);
  };

  const changeSort = newSort => {
    setSort(newSort);
    setPage(1);
  };

  const showPostDetails = id => {
    console.log('show details', id);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Toolbox
        onPress={refresh}
        selectedSort={sort}
        onSortChange={changeSort}
      />
      <FlatList
        data={posts}
        renderItem={({post}) => <Post post={post} onPress={showPostDetails} />}
        keyExtractor={post => post.data.id}
        onEndReached={loadMore}
        onEndReachedThreshold={0.8}
        onRefresh={refresh}
        refreshing={true}
      />
    </SafeAreaView>
  );
};

export default PostList;
