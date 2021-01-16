import configureStore from './configureStore';
import * as Search from './Search';

export const reducers = {
    search: Search.reducer
}

export const store = configureStore();
export const dispatch = (distpatchObj) => {
    store.dispatch(distpatchObj);
}