import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { expect } from 'chai';
import { mount } from 'enzyme';
import PokemonList from './PokemonList';
import Pokemon from '../containers/Pokemon';
import { AppContextProvider } from '../context/AppContext';


describe('<PokemonList />', () => {
    let wrapper;

    beforeEach(() => {
        const mock = [{
            id: 0,
            name: "test 1",
            url: "http://google.com",
            sprites: {front_default: "http://google.com"}
        }, {
            id: 1,
            name: "test 2",
            url: "http://google.com",
            sprites: {front_default: "http://google.com"}
        }];

        wrapper = mount(
            <AppContextProvider>
                <Router>
                    <PokemonList pokemons={mock} />
                </Router>
            </AppContextProvider>
        );
    });

    it("renders PokemonList should have two pokemon", () => {
        expect(wrapper.find(Pokemon)).to.have.length(2);
    });
});