import '../../common';
import React from 'react';
import {mount} from 'enzyme';
import {Provider} from 'react-redux';
import GravityButton from '../../../components/PostList/PostDetails/PostDetailsList/GravityButton';
import store from '../../../store';

describe('GravityButton', () => {
  let mountedComponent;
  const Component = () => {
    if (!mountedComponent) {
      mountedComponent = mount(
        <Provider store={store}>
          <GravityButton
            post={{image_url: 'MockPost.url', name: 'Mock Post Name'}}
          />
        </Provider>,
      );
    }
    return mountedComponent;
  };

  it('should always renders a button tag', () => {
    const button = Component().find('button');
    button.should.have.lengthOf(1);
  });

  it('should always have an onclick attribute', () => {
    const button = Component().find('button');
    button.props().should.have.property('onClick');
    button.props().onClick.should.be.a('function');
  });
});
