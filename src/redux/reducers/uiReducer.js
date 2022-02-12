import * as actionTypes from "../types";

const initialState = {
    isDarkMode: false,
};

export default function uiReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.SET_THEME:
            return {
                ...state,
                isDarkMode: action.payload,
            };
        default:
            return {
                ...state,
            };
    }
}