import '../../common';
import React from 'react';
import {mount} from 'enzyme';
import PostHeader from '../../../components/PostList/PostDetails/PostHeader';

describe('PostHeader', () => {
  let mountedComponent;
  const postName = 'Mock Post Name';
  const Component = () => {
    if (!mountedComponent) {
      mountedComponent = mount(
        <PostHeader post={{image_url: 'MockPost.url', name: postName}} />,
      );
    }
    return mountedComponent;
  };

  it('should always renders a Header tag', () => {
    const headers = Component().find('header');
    headers.should.have.lengthOf(1);
  });

  it('should always renders a h1 tag', () => {
    const h1 = Component().find('h1');
    h1.should.have.lengthOf(1);
  });

  it('should always renders a h1 tag', () => {
    const text = Component()
      .find('h1')
      .text();
    text.should.equal(postName);
  });
});
