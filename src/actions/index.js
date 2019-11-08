import { 
    SIGN_IN, 
    SIGN_OUT,SEARCH_TERM } from './types';

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    }
}

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
}

export const searchTerm = (searchTerm) => {
    return {
        type: SEARCH_TERM,
        payload: searchTerm
    }
}