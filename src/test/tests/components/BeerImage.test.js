import '../../common';
import React from 'react';
import {mount} from 'enzyme';
import PostImage from '../../../components/PostList/PostDetails/PostImage';

describe('PostImage', () => {
  let mountedComponent;
  const Component = () => {
    if (!mountedComponent) {
      mountedComponent = mount(
        <PostImage
          post={{image_url: 'MockPost.url', name: 'Mock Post Name'}}
        />,
      );
    }
    return mountedComponent;
  };

  it('should always renders a img tag', () => {
    const headers = Component().find('img');
    headers.should.have.lengthOf(1);
  });

  it('should always have an alt attribute', () => {
    const img = Component().find('img');
    img.props().should.have.property('alt');
    img.props().alt.length.should.be.above(2);
  });
});
