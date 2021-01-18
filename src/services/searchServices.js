import { dispatch, store } from '../store';
import { actionSearch } from '../store/Search';

const URL_BASE = "https://rickandmortyapi.com/api";

const selectSearch = () => {
    const { search } = store.getState();
    return search;
}

export const getCharacter = (nameOfCharacter) => {
    actionSearch.go(nameOfCharacter)
    fetch(URL_BASE + '/character')
    .then( response => response.json())
    .then( (json) => {
        console.log(json);
    })
    .catch( error => {console.log(error)});
}

export const getLocation = () => {

}

export const getEpisode = () => {

}
