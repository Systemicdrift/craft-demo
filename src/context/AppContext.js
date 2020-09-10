import React, { useReducer, createContext, useContext } from 'react';

export const AppContext = createContext();
export const AppDispatchContext = createContext();

const initState = {
    pokemons: [],
    currentPokemon: {},
    savedPokemon: [],
    currentURL: ""
}

const appReducer = (state, action) => {
    switch (action.type) {
        case "SET_CURRENT_POKEMON":
            return {
                pokemons: state.pokemons,
                currentPokemon: action.payload,
                savedPokemon: state.savedPokemon,
                currentURL: state.currentURL
            }
        case "SET_CURRENT_URL":
            return {
                pokemons: state.pokemons,
                currentPokemon: state.currentPokemon,
                savedPokemon: state.savedPokemon,
                currentURL: action.payload
            }
        case "STORE_POKEMONS":
            return {
                pokemons: action.payload,
                currentPokemon: state.currentPokemon,
                savedPokemon: state.savedPokemon,
                currentURL: state.currentURL
            }
        default:
            return state;
    }
}

export const useAppState = () => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useCountDispatch must be used within an AppContextProvider')
    }
    return context;
}

export const usePokemonState = () => {
    const context = useAppState();
    return context.currentPokemon;
}

export const useUrlState = () => {
    const context = useAppState();
    return context.currentURL;
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