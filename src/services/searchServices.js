import { dispatch, store } from '../store';
import { actionSearch } from '../store/Search';

const URL_BASE = "https://rickandmortyapi.com/api";

const selectSearch = () => {
    const { search } = store.getState();
    return search;
}

export const getCharacter = () => {

}

export const getLocation = () => {

}

export const getEpisode = () => {

}
