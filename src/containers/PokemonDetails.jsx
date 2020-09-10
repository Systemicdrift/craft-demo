import React from 'react';
import PokemonDetails from '../components/PokemonDetails';
import { usePokemonState } from '../context/AppContext';

export default function PokemonDetailsContainer(props) {
    const pokemon = usePokemonState();
    console.log('***************');
    console.log(pokemon);

    return (
        <div className="pokemon-details-container">
            <PokemonDetails pokemon={pokemon} />
        </div>
    );
}