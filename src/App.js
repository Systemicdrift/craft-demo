import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PokemonListContainer from './containers/PokemonList';
import PokemonDetailsContainer from './containers/PokemonDetails';
import './App.scss';

function App() {
  return (
    <div className="App">
        <div className="App">
            <Router>
                <div className="nav-container">
                    <div className="nav-link">
                        <Link to="/">Home</Link>
                    </div>
                </div>
                <Route path="/" exact component={PokemonListContainer} />
                <Route path="/details/:id" component={PokemonDetailsContainer} />
            </Router>
        </div>
    </div>
  );
}

export default App;
