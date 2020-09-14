import React, { useState, useEffect } from 'react';
import Pokemon from '../components/Pokemon';
import { getPokemon } from '../services/pokemonService';
import { Link } from "react-router-dom";
import { useAppDispatch, usePokemon } from '../context/AppContext';

export default function PokemonContainer(props) {
    const dispatch = useAppDispatch()
    const [pokemon, setPokemon] = useState(usePokemon(props.pokemon.name));
    const fetchData = async (dispatcher) => {
        await getPokemon(props.pokemon.url)
            .then(res => res.json())
            .then(data => {
                setPokemon(data);
                dispatcher({type: 'STORE_POKEMON', payload: data});
            });
    }

    useEffect(() => {
        if (pokemon === null) {
            fetchData(dispatch);
        }
    }, []);

    // useEffect(() => {console.log('pokemon container',pokemon)}, [pokemon]);

    return (
        <div className="pokemon-container">
            {
                pokemon !== null ?
                    <Link to={`/details/${pokemon.id}`} onClick={() => dispatch({type: 'SET_CURRENT_POKEMON', payload:pokemon})}>
                        <Pokemon pokemon={pokemon} />
                    </Link>
                    : <div />
            }
        </div>
    );
}