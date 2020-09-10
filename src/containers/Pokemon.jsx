import React, { useState, useEffect } from 'react';
import Pokemon from '../components/Pokemon';
import { getPokemon } from '../services/pokemonService';
import { Link } from "react-router-dom";
import { useAppDispatch } from '../context/AppContext';

export default function PokemonContainer(props) {
    const dispatch = useAppDispatch()
    const [pokemon, setPokemon] = useState({});
    const fetchData = async () => {
        // console.log('props.pokemon.url:', props.pokemon)
        await getPokemon(props.pokemon.url)
            .then(res => res.json())
            .then(data => {
                setPokemon(data)
            });
    }

    useEffect(() => {
        fetchData();
    }, []);

    // useEffect(() => {console.log('pokemon container',pokemon)}, [pokemon]);

    return (
        <div className="pokemon-container">
            <Link to={`/details/${pokemon.id}`} onClick={() => dispatch({type: 'SET_CURRENT_POKEMON', payload:pokemon})}>
                <Pokemon pokemon={pokemon} />
            </Link>
        </div>
    );
}