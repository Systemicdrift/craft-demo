import React from 'react';
import Pokemon from '../containers/Pokemon';
import './PokemonList.scss';

export default function PokemonList(props) {
    if (props.pokemons === undefined) {
        return (<div></div>);
    }
    return (
        <div className="pokemon-list">
            {
                props.pokemons.map((pokemon) => {
                    return (
                        <Pokemon key={pokemon.name} pokemon={pokemon} />
                    );
                })
            }
        </div>
    );
}