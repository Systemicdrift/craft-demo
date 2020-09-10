import React from 'react';

export default function Pokemon(props) {
    if (props.pokemon.name) {
        return (
            <div className="card-container">
                <div className="card">
                    <h3 className="card-name">{ props.pokemon.name }</h3>
                </div>
            </div>
        );
    } else {
        return (<div />);
    }
}