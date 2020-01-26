import '../../common';
import React from 'react';
import {mount} from 'enzyme';
import {BrowserRouter as Router} from 'react-router-dom';
import Post from '../../../components/PostList/Post';
import literals from '../../../config/literals';

describe('Post', () => {
  let mountedComponent;
  const Component = () => {
    if (!mountedComponent) {
      mountedComponent = mount(
        <Router>
          <Post
            post={{
              id: 1,
              image_url: 'Mock Img URL',
              name: 'Mock Name',
              tagLine: 'Mock TagLine',
            }}
            selected={false}
          />
        </Router>,
      );
    }
    return mountedComponent;
  };

  it('should always renders a li', () => {
    const li = Component().find('li');
    li.should.have.lengthOf(1);
  });

  it('should always renders a div with a class post inside a li', () => {
    const ul = Component()
      .find('li')
      .find('div.post');
    ul.should.have.lengthOf(1);
  });

  it('should not have a disabled a', () => {
    const a = Component().find('li a');
    a.should.have.lengthOf(1);
    const aDisabled = Component().find('li a.disabled');
    aDisabled.should.have.lengthOf(0);
  });

  it('should the button text should match the literals', () => {
    const buttonText = Component()
      .find('li div.button')
      .text();
    buttonText.should.equal(literals.seeDetails);
  });
});

describe('Post Selected', () => {
  let mountedComponent;
  const Component = () => {
    if (!mountedComponent) {
      mountedComponent = mount(
        <Router>
          <Post
            post={{
              id: 2,
              image_url: 'Mock Img URL',
              name: 'Mock Name',
              tagLine: 'Mock TagLine',
            }}
            selected
          />
        </Router>,
      );
    }
    return mountedComponent;
  };

  it('should always renders a div with post and selected classes inside the li', () => {
    const ul = Component()
      .find('li')
      .find('div.post.selected');
    ul.should.have.lengthOf(1);
  });

  it('should have a disabled a', () => {
    const a = Component().find('li a');
    a.should.have.lengthOf(1);
    const aDisabled = Component().find('li a.disabled');
    aDisabled.should.have.lengthOf(1);
  });

  it('should the button text should match the literals', () => {
    const buttonText = Component()
      .find('li div.button')
      .text();
    buttonText.should.equal(literals.selected);
  });
});
