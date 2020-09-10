import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PokemonListContainer from './containers/PokemonList';
import PokemonDetailsContainer from './containers/PokemonDetails';
import { AppContextProvider } from './context/AppContext';
import './App.scss';


function App() {
  return (
    <AppContextProvider>
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
    </AppContextProvider>
  );
}

export default App;
