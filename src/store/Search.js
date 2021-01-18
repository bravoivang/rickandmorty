import { useSelector } from 'react-redux';

export const useSearch = () => {
    return useSelector( state => state.search);
}

export const actionSearch = {
    go : (word) => ({ type: "SEARCH_GO", payload: word}),
    searching : () => ({ type : "SEARCH_SEARCHING"}),
    success : (response) => ({type: "SEARCH_SUCCESS", payload: response}),
    failure : (error) => ({type: "SEARCH_FAILURE", payload: error})
}

const initState = {
    word : "",
    errorMessage : "",
    loading : false,
    response : null
}

export const reducer = (prevState, incomingAction) => {
    if (prevState === undefined){
        return initState;
    }

    const action = incomingAction;
    switch (action) {
        case 'SEARCH_GO':
            return { ...prevState,
                word : action.payload
            }    
        case 'SEARCH_SEARCHING':
            return { ...prevState,
                loading : true
            }    
        case 'SEARCH_SUCCESS':
            return { ...prevState,
                loading : false,
                response : action.payload
            }    
        case 'SEARCH_FAILURE':
            return { ...prevState,
                errorMessage : action.payload,
                loading : false
            }    
        default:
            return prevState;
    }
}
