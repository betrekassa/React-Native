import createDataContext from './createDataContext';
import AsyncStorage from '@react-native-community/async-storage'
import trackerApi from '../api/tracker';

import { navigate } from '../navigationRef';

const authReducer = (state, action) =>{
    switch (action.type)
    {
        case 'add_error':
            return {...state, errorMessage: action.payload };
        case 'signin':
                return {errorMessage:'', token: action.payload};
        case 'signout':
                return {errorMessage:'', token: ''};
        case 'clean_error':
                return {...state, errorMessage:''};
        default:
            return state;
    }
};


    const cleanErrorMessage = dispatch =>()=>
    {
        console.log('happy');
        dispatch({type:'clean_error'});
    };

    const tryLocalSignIn = (dispatch) =>{
    return async() =>
    {
        const token = await AsyncStorage.getItem('token');

        if (token)
        {
            dispatch({type:'signin', payload: token});
            navigate('TrackList');
        }
        else 
        {
            navigate('loginFlow');
        }
    }
};
const signup = (dispatch) => {

    return async ({ email, password }) =>{
        // Make api request to sign up
        try
        {
            console.log({email});
            
            console.log({password});
            const response = await trackerApi.post('/signup',{ email, password });
            
            await AsyncStorage.setItem('token', response.data.token);
         
             dispatch({type:'signin', payload: response.data.token});

            navigate('TrackList');
        }
        catch(err)
        {
           dispatch({type: 'add_error', payload:'something went wrong!'});
           //console.log(err.message);
        }
        // if sign up modify our state

        // if fails error 
    };
};

const signin = (dispatch) =>{
    return async({ email, password }) =>{
    try{
        const response = await trackerApi.post('/signin',{ email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type:'signin', payload: response.data.token});
        navigate('TrackList');
    } catch(err)
    {
        dispatch({type: 'add_error', payload:'something went wrong with Sign In!'});
    }
        // handle success

        // if fails error 
    };
};


const signout = (dispatch) =>{
    return async() =>{
       await AsyncStorage.removeItem('token');
       dispatch({ type:'signout'});
       navigate('loginFlow');
    
    };
};
export const { Provider , Context } = createDataContext(
    authReducer,
    {signin, signout , signup, cleanErrorMessage,tryLocalSignIn, signout},
    { token: null, errorMessage:'' }
);