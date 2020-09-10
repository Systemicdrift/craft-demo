import React, { useState, useEffect } from 'react';
import Pokemon from '../components/Pokemon';
import { getPokemon } from '../services/pokemonService';
import { Link } from "react-router-dom";

export default function PokemonContainer(props) {
    const [pokemon, setPokemon] = useState({});
    const fetchData = async () => {
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
            <Link to={`/details/${pokemon.id}`}>
                <Pokemon pokemon={pokemon} />
            </Link>
        </div>
    );
}