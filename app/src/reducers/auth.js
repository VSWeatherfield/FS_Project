import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
} from '../actions/types';

const initialState = {
    isAuthenticated: null,
    username: '',
    location: '',
    num_views: '',
    date_activity: '',
    last_answer: '',
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case REGISTER_SUCCESS:
            return {
                ...state,
                isAuthenticated: false
            }

        case REGISTER_FAIL:
            return state
        default:
            return state
    };
};