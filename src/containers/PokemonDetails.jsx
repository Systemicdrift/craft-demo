import React, { useState, useEffect } from 'react';
import PokemonDetails from '../components/PokemonDetails';
import { getPokemonLocation } from '../services/pokemonService';
import { usePokemonState, useAppDispatch, useSavedState, usePokemonLocation } from '../context/AppContext';

export default function PokemonDetailsContainer(props) {
    const pokemon = usePokemonState();
    const dispatch = useAppDispatch();
    const savedState = useSavedState();
    const saved = savedState.find((p) => p.id === pokemon.id);
    const [locations, setPokemonLocations] = useState(usePokemonLocation(pokemon.name));
    console.log(saved);
    const fetchData = async (id) => {
        await getPokemonLocation(id)
            .then(res => res.json())
            .then(data => {
                setPokemonLocations(data.locations)
                dispatch({type: 'SAVE_POKEMON_LOCATION',
                    payload: {name: pokemon.name, locations:data.locations}});
            });
    }

    useEffect(() => {
        if (locations === null) {
            fetchData(pokemon.id);
        }
    }, []);

    useEffect(() => {console.log('pokemon locations: ',locations)}, [locations]);

    return (
        <div className="pokemon-details-container">
            <PokemonDetails pokemon={pokemon} locations={locations} dispatch={dispatch} saved={saved} />
        </div>
    );
}