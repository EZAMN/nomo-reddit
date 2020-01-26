import '../../common';
import React from 'react';
import { mount } from 'enzyme';
import literals from '../../../config/literals';
import HeaderComp from '../../../components/Header';


describe('Header', () => {
  let mountedHeader;
  const Header = () => {
    if (!mountedHeader) {
      mountedHeader = mount(<HeaderComp />);
    }
    return mountedHeader;
  };

  it('should always renders a header', () => {
    const headers = Header().find('header');
    headers.should.have.lengthOf(1);
  });

  it('should always renders a h2 inside a header', () => {
    const divs = Header().find('header').find('h2');
    divs.should.have.lengthOf(1);
  });

  it('should have the literal defined in config', () => {
    const text = Header().text();
    text.should.be.equal(literals.header);
  });
});
