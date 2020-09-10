import React, {useState, useEffect } from 'react';
import { getPokemons } from '../services/pokemonService';

export default function PokemonListContainer() {
    const [pokemons, setPokemons] = useState([]);

    const fetchData = () => {
        getPokemons()
        .then(res => res.json())
        .then(data => {
            setPokemons(data.results);
        });
    }

    useEffect(() => {
        fetchData();
    }, []);

    const search = (e) => {

    }

    const toggleAll = () => {
        setPokemons(pokemons);
        console.log('all')
    }
    const toggleSaved = () => {
        setPokemons(pokemons);
        console.log('saved')
    }

    return (
        <div className="pokemon-list-container">
            <div className="list-button-container">
                <div>
                    <button className="list-button" onClick={toggleAll}>All</button>
                    <button className="list-button" onClick={toggleSaved}>Saved</button>
                </div>
            </div>
            <div className="search-container">
                <input type="text" placeholder="Search" onChange={search} />
            </div>
            {/* <PokemonList pokemons={pokemons} /> */}
        </div>
    );
}