import { SIGN_IN, SIGN_OUT, SEARCH_TERM} from '../actions/types';

const INITIAL_STATE = {
    isSignedIn:null,
    userId: null,
    searchTerm:null
}
export default (state=INITIAL_STATE, action) => {
    switch(action.type){
        case SIGN_IN:
            return {...state, isSignedIn: true, userId: action.payload};
        case SIGN_OUT:
            return {...state, isSignedIn: false, userId: null};
        case SEARCH_TERM:
            return{...state,searchTerm: action.payload}
        default:
            return state;
    }
}