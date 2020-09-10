import React from 'react';
import './Pokemon.scss';

export default function Pokemon(props) {
    if (props.pokemon.name) {
        return (
            <div className="card-container">
                <div className="card">
                    <img className="card-image" src={ props.pokemon.sprites.front_default } alt={ props.pokemon.name } />
                    <h3 className="card-name">{ props.pokemon.name }</h3>
                </div>
            </div>
        );
    } else {
        return (<div />);
    }
}