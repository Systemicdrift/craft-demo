import React from 'react';

export default function PokemonListContainer() {
    const noop = () => null;
    return (
        <div className="pokemon-list-container">
            <div className="list-button-container">
                <div>
                    <button className="list-button" onClick={noop}>All</button>
                    <button className="list-button" onClick={noop}>Saved</button>
                </div>
            </div>
            <div className="search-container">
                <input type="text" placeholder="Search" onChange={noop} />
            </div>
        </div>
    );
}