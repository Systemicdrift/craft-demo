import React, { useReducer, createContext, useContext } from 'react';

export const AppContext = createContext();
export const AppDispatchContext = createContext();

const initState = {
    pokemonList: [],
    currentPokemon: {},
    savedPokemon: [],
    // currentURL: "",
    pokemons: {},
    pokemonLocations: {}
}

const appReducer = (state, action) => {
    switch (action.type) {
        case "SAVE_POKEMON_LOCATION":
            return {
                pokemonList: state.pokemonList,
                currentPokemon: state.currentPokemon,
                savedPokemon: state.savedPokemon,
                pokemons: state.pokemons,
                pokemonLocations: storePokemonLocation(state.pokemonLocations, action.payload)
            }
        case "SAVED_POKEMON_ADD":
            return {
                pokemonList: state.pokemonList,
                currentPokemon: state.currentPokemon,
                savedPokemon: [...state.savedPokemon, action.payload],
                pokemons: state.pokemons,
                pokemonLocations: state.pokemonLocations
            };
        case "SAVED_POKEMON_DELETE":
            return {
                pokemonList: state.pokemonList,
                currentPokemon: state.currentPokemon,
                savedPokemon: state.savedPokemon.filter(pokemon => pokemon.id !== action.payload.id),
                pokemons: state.pokemons,
                pokemonLocations: state.pokemonLocations
            };
        case "SET_CURRENT_POKEMON":
            return {
                pokemonList: state.pokemonList,
                currentPokemon: action.payload,
                savedPokemon: state.savedPokemon,
                pokemons: state.pokemons,
                pokemonLocations: state.pokemonLocations
            }
        case "STORE_POKEMONS":
            return {
                pokemonList: action.payload,
                currentPokemon: state.currentPokemon,
                savedPokemon: state.savedPokemon,
                pokemons: state.pokemons,
                pokemonLocations: state.pokemonLocations
            }
        case "STORE_POKEMON":
            return {
                pokemonList: state.pokemonList,
                currentPokemon: state.currentPokemon,
                savedPokemon: state.savedPokemon,
                pokemons: storePokemon(state.pokemons, action.payload),
                pokemonLocations: state.pokemonLocations
            }
        default:
            return state;
    }
}

const storePokemon = (state, payload) => {
    let newState = Object.assign({}, state);
    newState[payload.name] = payload;
    return newState;
}

const storePokemonLocation = (state, payload) => {
    let newState = Object.assign({}, state);
    newState[payload.name] = payload.locations;
    return newState;
}

export const usePokemonLocation = (name) => {
    const context = useAppState();
    if (name in context.pokemonLocations) {
        return context.pokemonLocations[name];
    } else {
        return null;
    }
}


export const useAppState = () => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useCountDispatch must be used within an AppContextProvider')
    }
    return context;
}

export const usePokemon = (name) => {
    const context = useAppState();
    if (name in context.pokemons) {
        return context.pokemons[name];
    } else {
        return null;
    }
}

export const usePokemonsState = () => {
    const context = useAppState();
    return context.pokemonList;
}

export const usePokemonState = () => {
    const context = useAppState();
    return context.currentPokemon;
}

export const useSavedState = () => {
    const context = useAppState();
    return context.savedPokemon;
}

export const useAppDispatch = () => {
    const context = useContext(AppDispatchContext);
    if (context === undefined) {
        throw new Error('useCountDispatch must be used within an AppContext')
    }
    return context;
}

export const AppContextProvider = props => {
    const [state, dispatch] = useReducer(appReducer, initState);

    return (
        <AppContext.Provider value={state}>
            <AppDispatchContext.Provider value={dispatch}>
                {props.children}
            </AppDispatchContext.Provider>
        </AppContext.Provider>
    );
}