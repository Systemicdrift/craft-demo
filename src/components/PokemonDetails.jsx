import React from 'react';
import { usePokemonState } from '../context/AppContext';

export default function PokemonDetails(props) {
    const pokemon = props.pokemon;
    console.log(pokemon);
    const mockText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

    return (
        <div className="pokemon-detail-container">
            <div className="row">
                <div className="col-4">
                    <div className="row">
                        <img className="card-image" src={ pokemon.sprites.front_default } alt={ pokemon.name } />
                    </div>
                    <div className="row">
                        <h3 className="pokemon-name">{ pokemon.name }</h3>
                    </div>
                    <div className="row">
                        <dl>
                            <dt className="col-6">Height:</dt>
                            <dd className="col-6">{ pokemon.height }</dd>
                            <dt className="col-6">Weight:</dt>
                            <dd className="col-6">{ pokemon.weight }</dd>
                            <dt className="col-6">In Bag:</dt>
                            <dd className="col-6"><input type="checkbox" /></dd>
                        </dl>
                    </div>

                    <div className="row">
                        { mockText }
                    </div>

                </div>
                <div className="col-9">
                    map goes here...
                    {   // was not able to get map component working...
                        // props.locations && props.locations.length ? <Map locations={props.locations} zoomLevel={15} /> : <div />
                    }

                </div>
            </div>
            <div className="row abilities-title">Abilities:</div>
            <div className="row">
                    {
                        pokemon.abilities.map((ability) => {
                            return (
                                <div className="abilities" key={ability.ability.name}>
                                    <a href={ ability.ability.url } target="_blank">{ ability.ability.name }</a>
                                </div>
                            );
                        })
                    }
            </div>
        </div>
    );
}