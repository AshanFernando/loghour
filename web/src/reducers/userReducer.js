import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function userReducer(state = initialState.user, action) {
    switch (action.type) {
        case types.SET_USER_STATE:
            return Object.assign({}, state, action.user);
        default:
            return state;
    }
}
