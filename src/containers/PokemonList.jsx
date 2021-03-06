import React, {useState, useEffect } from 'react';
import { getPokemons } from '../services/pokemonService';
import PokemonList from '../components/PokemonList';
import { useAppDispatch, usePokemonsState, useSavedState } from '../context/AppContext';

export default function PokemonListContainer() {
    const perPage = 30;
    const dispatch = useAppDispatch();
    const saved = useSavedState();
    const [pokemonList, setPokemonList] = useState(usePokemonsState());
    const [pokemonToDisplay, setPokemonToDisplay] = useState({
        page: -1,
        pokemonToDisplay: [],
    });
    const [isBottom, setIsBottom] = useState(false);

    // infinite scroll lifted from
    // https://hackernoon.com/builing-an-infinite-scroll-using-react-hooks-pe113urj
    const handleScroll = () => {
        console.log('scrolling');
        const scrollTop = (document.documentElement
            && document.documentElement.scrollTop)
            || document.body.scrollTop;
        const scrollHeight = (document.documentElement
            && document.documentElement.scrollHeight)
            || document.body.scrollHeight;
        if (scrollTop + window.innerHeight + 50 >= scrollHeight){
            setIsBottom(true);
        }
    }

    const fetchData = (dispatcher) => {
        getPokemons()
        .then(res => res.json())
        .then(data => {
            setPokemonList(data.results);
            dispatcher({type: '', payload: data.results});
        });
    }

    useEffect(() => {
        if (pokemonList.length === 0) {
            fetchData(dispatch);
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    useEffect(() => {
        if (isBottom) {
          addItems();
        }
    }, [isBottom]);

    useEffect(() => {
        addItems();
    }, [pokemonList]);

    const search = (e) => {
        const str = e.target.value;
        const reg = new RegExp(str, "gi");
        const filteredList = pokemonList.filter((val) => {
            return reg.test(val.name);
        });

        setPokemonToDisplay(prevState => ({
            page: prevState.page,
            pokemonToDisplay: filteredList.slice(
                0,
                (prevState.page + 1) * perPage
            )
        }));
    }

    const addItems = () => {
        // console.log('pokemlist', pokemonList)
        if (pokemonList.length !== 0) {
            setPokemonToDisplay(prevState => ({
                page: prevState.page + 1,
                pokemonToDisplay: prevState.pokemonToDisplay.concat(
                    pokemonList.slice(
                        (prevState.page + 1) * perPage,
                        (prevState.page + 1) * perPage + perPage,
                    ),
                ),
            }));
          setIsBottom(false);
        }
      };

    const toggleAll = () => {
        setPokemonToDisplay(prevState => ({
            page: prevState.page,
            pokemonToDisplay: pokemonList.slice(
                0,
                (prevState.page + 1) * perPage
            )
        }));
    }
    const toggleSaved = () => {
        setPokemonToDisplay(prevState => ({
            page: prevState.page,
            pokemonToDisplay: saved
        }));
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
            <PokemonList pokemons={pokemonToDisplay.pokemonToDisplay} />
        </div>
    );
}