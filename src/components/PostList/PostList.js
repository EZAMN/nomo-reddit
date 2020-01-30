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
// it uses the flatlist to display the posts, to scroll, and show the loading icon
const PostList = () => {
  const {postList, lastPostName, loading} = useSelector(state => state);
  const [page, setPage] = useState(1); // State to keep track of the last page loaded
  const [sort, setSort] = useState('hot'); // State to keep track of the sorting method selected
  const [url, setUrl] = useState(''); //State used to keep track of the url showed in the modal
  const [showModal, setShowModal] = useState(false); //State to keep track of the modal showing or not
  const dispatch = useDispatch();

  // Effect to load each new page on pagechange or sorting method change
  useEffect(() => {
    const lastPostNameFiltered = page === 1 ? '' : lastPostName;
    dispatch(getPosts(page, sort, lastPostNameFiltered));
  }, [page, sort]);

  //Function to trigger a page refresh
  const refresh = () => {
    setPage(1);
  };

  //Function called to load more posts from the api
  const loadMore = () => {
    setPage(page + 1);
  };

  //Function used to change the sorting method
  //Sets the page to 1 to start from the beginning
  const changeSort = newSort => {
    setSort(newSort);
    setPage(1);
  };

  //Function to call the modal and the postDetails component
  const showPostDetails = urlPost => {
    setUrl(urlPost);
    setShowModal(true);
  };

  //Function to close the modal once open
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
