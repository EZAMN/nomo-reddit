/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Post} from './Post';
import {Toolbox} from './Toolbox';
import {getPosts} from '../../actions';
import {Modal} from '../Common/Modal';
import {PostDetails} from './PostDetails';
import styles from './styles';

// Component to show the post list
// It changes shape and scroll direction depending on the loading page
const PostList = () => {
  const {postList, lastPostName, loading} = useSelector(state => state);
  const [page, setPage] = useState(1); // State to keep track of the last loaded page
  const [sort, setSort] = useState('hot'); // State to keep track of the last loaded page
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  let url;

  // Effect to load each new page on pagechange
  useEffect(() => {
    dispatch(getPosts(page, sort, lastPostName));
  }, [page, sort]);

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

  const showPostDetails = urlPost => {
    url = urlPost;
    setShowModal(true);
  };

  const hideModal = () => {
    setShowModal(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Modal isVisible={showModal} hide={hideModal}>
        <PostDetails url={url} />
      </Modal>
      <Toolbox
        onPress={refresh}
        selectedSort={sort}
        onSortChange={changeSort}
      />
      <FlatList
        data={postList}
        renderItem={post => <Post post={post} onPress={showPostDetails} />}
        keyExtractor={post => post.data.id}
        onEndReached={loadMore}
        onEndReachedThreshold={0.8}
        legacyImplementation={true}
        onRefresh={refresh}
        refreshing={loading}
      />
    </SafeAreaView>
  );
};

export default PostList;
