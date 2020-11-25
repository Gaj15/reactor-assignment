import { chunk } from '../../utils/array_utils';

const initialState = {
    shirts: [[]],
    jackets: [[]],
    accessories: [[]]
};

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SHIRTS_LOADED":
            return {
                ...state,
                shirts: chunk(action.data, 10)
            }

        case "JACKETS_LOADED": 
        return {
            ...state,
            jackets: chunk(action.data, 10)
        }

        case "ACCESSORIES_LOADED":
            return {
                ...state,
                accessories: chunk(action.data, 10)
            }
        default:
            return state;

    }
};
export default productsReducer;

export const shirtsLoaded = (data) => {
    return {
        type: 'SHIRTS_LOADED',
        data: data
    }
}

export const jacketsLoaded = (data) => {
    return {
        type: 'JACKETS_LOADED',
        data: data
    }
}

export const accessoriesLoaded = (data) => {
    return {
        type: 'ACCESSORIES_LOADED',
        data: data
    }
}



/*

initialstate = { currentCount: 0 };


const counterReducer = (state = initialState , action) => {

    switch(action.type) {
        case "INCREMENT":
            return { ...state, currentCount: state.currentCount + 1 };
 
        case "DECREMENT":
            return { ...state, currentCount: state.currentCount - 1 };
 
        default:
            return state
    }

}

*/
