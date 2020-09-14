This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Pokemon finder

* Lists the first 151 pokemons, supports infinite scrolling of the pokemon list.

* You can save pokemon (within browser memory, refresh or closing destroys that).

* Searching/Filtering works!

* Mapping works, see below for known issues

* App caches json data so you don't have to!

## Available commands

In the project directory, you can run:

### `yarn install`

To install dependencies

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />

# Known issues

* Google maps barks at you saying it didn't load correctly. It needs a proper dev key and someone to bill. Nothing is "free". Key was removed because github warns against storing keys.

* When saving pokemon and flipping from all/saved view, the infinite scroll breaks due to some state not being restored properly.