import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';
//import Spinner from '../Spinner';
//import PostDetailsList from './PostDetailsList';
//import PostImage from './PostImage';
//import PostHeader from './PostHeader';
import {selectPost} from '../../../actions';
//import 'antd/es/spin/style/css';

// Component to render the selected post details
const PostDetails = ({id}) => {
  const selectedPost = useSelector(state => state.postDetails);
  const loading = useSelector(state => state.loadingDetails);
  const dispatch = useDispatch();
  // Effect used to select a post depending on the id selected
  useEffect(() => {
    dispatch(selectPost(id));
  }, [dispatch, id]);

  //const spinner = loading ? <Spinner spinning={loading} size="large" /> : '';
  const spinner = '';

  /*return (
    <section className="details text-center">
      {spinner}
      <div className="row text-center wrapper">
        <PostImage post={selectedPost} />
        <div className="col-sm-9 column">
          <PostHeader post={selectedPost} />
          <PostDetailsList post={selectedPost} />
        </div>
      </div>
    </section>
  );*/

  return <section className="details text-center">{spinner}</section>;
};

export default PostDetails;

PostDetails.propTypes = {
  id: PropTypes.string.isRequired,
};
