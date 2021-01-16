import { combineReducers, createStore } from 'redux';
import { reducers } from '.';

export default function configureStore(initialState){
    const rootReducer = combineReducers({
        ...reducers,
    });

    return createStore(
        rootReducer,
        initialState
    );
}