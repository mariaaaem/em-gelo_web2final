import * as actionTypes from '../types';

const initialState = {
    currentUser: {},
    isLoading: localStorage.getItem('isLoading'),
    isAuthenticated: localStorage.getItem('isAuth'),
    error: null
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGGED_IN_STATE:
            return {
                ...state,
                currentUser: action.payload,
                isLoading: localStorage.getItem('isLoading'),
                isAuthenticated: localStorage.getItem('isAuth'),
            }
        case actionTypes.LOGGED_OUT_STATE:
            return {
                ...state,
                currentUser: null,
                isLoading: localStorage.getItem('isLoading'),
                isAuthenticated: localStorage.getItem('isAuth'),
            };
        case actionTypes.ON_ERROR:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
}

export default userReducer;