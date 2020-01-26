import '../../common';
import React from 'react';
import {mount} from 'enzyme';
import {Provider} from 'react-redux';
import PostList from '../../../components/PostList';
import store from '../../../store';

describe('PostList Details', () => {
  let mountedComponent;
  const Component = () => {
    if (!mountedComponent) {
      mountedComponent = mount(
        <Provider store={store}>
          <PostList type="Detail" />
        </Provider>,
      );
    }
    return mountedComponent;
  };

  it('should always renders a section', () => {
    const section = Component().find('section');
    section.should.have.lengthOf(1);
  });

  it('should always renders a ul inside a section', () => {
    const ul = Component()
      .find('section')
      .find('ul');
    ul.should.have.lengthOf(1);
  });

  it('should always renders a section with the proper class', () => {
    const elementClass = Component().find('section.postListDetails');
    elementClass.should.have.lengthOf(1);
  });
});

describe('PostList General', () => {
  let mountedComponent;
  const Component = () => {
    if (!mountedComponent) {
      mountedComponent = mount(
        <Provider store={store}>
          <PostList type="General" />
        </Provider>,
      );
    }
    return mountedComponent;
  };

  it('should always renders a section', () => {
    const section = Component().find('section');
    section.should.have.lengthOf(1);
  });

  it('should always renders a ul inside a section', () => {
    const ul = Component()
      .find('section')
      .find('ul');
    ul.should.have.lengthOf(1);
  });

  it('should not render the details class', () => {
    const elementClass = Component().find('section.postListDetails');
    elementClass.should.have.lengthOf(0);
  });

  it('should always renders a section with the proper class', () => {
    const elementClass = Component().find('section.postList');
    elementClass.should.have.lengthOf(1);
  });
});
