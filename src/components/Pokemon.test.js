import React from 'react';
import { expect } from 'chai';
import { render, shallow } from 'enzyme';
import Pokemon from './Pokemon';

describe('<Pokemon />', () => {
    let wrapper;

    beforeEach(() => {
        const mock = {
            id: 0,
            name: "test 1",
            url: "http://google.com",
            sprites: {front_default: "http://google.com"}
        }

        wrapper = render(
            <Pokemon pokemon={mock} />
        );
    });

    it("renders image", () => {
        expect(wrapper.find('img')).to.have.length(1);
    });
});