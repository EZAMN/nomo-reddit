import '../../common';
import React from 'react';
import {mount} from 'enzyme';
import {Provider} from 'react-redux';
import PostDetailsList from '../../../components/PostList/PostDetails/PostDetailsList';
import store from '../../../store';
import literals from '../../../config/literals';

describe('PostDetailsList Details', () => {
  let mountedComponent;
  const Component = () => {
    if (!mountedComponent) {
      mountedComponent = mount(
        <Provider store={store}>
          <PostDetailsList
            post={{
              id: 192,
              name: 'Punk IPA 2007 - 2010',
              tagline: 'Post Modern Classic. Spiky. Tropical. Hoppy.',
              first_brewed: '04/2007',
              description:
                "Our flagship post that kick started the craft post revolution. This is James and Martin's original take on an American IPA, subverted with punchy New Zealand hops. Layered with new world hops to create an all-out riot of grapefruit, pineapple and lychee before a spiky, mouth-puckering bitter finish.",
              image_url: 'https://images.punkapi.com/v2/192.png',
              abv: 6.0,
              ibu: 60.0,
              target_fg: 1010.0,
              target_og: 1056.0,
              food_pairing: [
                'Spicy carne asada with a pico de gallo sauce',
                'Shredded chicken tacos with a mango chilli lime salsa',
                'Cheesecake with a passion fruit swirl sauce',
              ],
              contributed_by: 'Sam Mason <samjbmason>',
            }}
          />
        </Provider>,
      );
    }
    return mountedComponent;
  };

  it('should always render a dl', () => {
    const dl = Component().find('dl');
    dl.should.have.lengthOf(1);
  });

  it('should always render some dd and dt tags', () => {
    const dd = Component().find('dl dd');
    dd.length.should.be.above(2);
    const dt = Component().find('dl dt');
    dt.length.should.be.above(2);
  });

  it('should always render a button', () => {
    const button = Component().find('button');
    button.should.have.lengthOf(1);
  });

  it('should not show the gravity', () => {
    const text = Component()
      .find('dl')
      .text();
    text.should.not.include(literals.postOriginalGravity);
  });
});
