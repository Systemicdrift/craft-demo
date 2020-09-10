import React, { useState, useEffect } from 'react';
import PokemonDetails from '../components/PokemonDetails';
import { getPokemonLocation } from '../services/pokemonService';
import { usePokemonState } from '../context/AppContext';

export default function PokemonDetailsContainer(props) {
    const [locations, setPokemonLocations] = useState({});
    const pokemon = usePokemonState();
    // console.log(pokemon);
    const fetchData = async (id) => {
        await getPokemonLocation(id)
            .then(res => res.json())
            .then(data => {
                setPokemonLocations(data.locations)
            });
    }

    useEffect(() => {
        fetchData(pokemon.id);
    }, []);

    useEffect(() => {console.log('pokemon locations: ',locations)}, [locations]);

    return (
        <div className="pokemon-details-container">
            <PokemonDetails pokemon={pokemon} locations={locations} />
        </div>
    );
}