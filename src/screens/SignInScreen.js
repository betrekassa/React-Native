import React, { useContext} from 'react';
import { View } from 'react-native';

import {NavigationEvents} from 'react-navigation';

import {Context as AuthContext} from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import Styles from '../styles/Styles';

const SignInScreen = ({ navigation }) =>{

    const {state , signin , cleanErrorMessage} = useContext(AuthContext);
    
    return (
        <View style={Styles.container}>
            <NavigationEvents 
               onWillBlur={cleanErrorMessage}
            />
            <AuthForm
                headerText="Sign In"
                errorMessage={state.errorMessage}
                submitButtonText="Sign Up"
                OnSubmit = {signin}
                isconfirmPassword = {false}
                routeNames="SignUp"
                linkText="Do not have An Account?"
            />
        </View>
    )
};

SignInScreen.navigationOptions = () =>{
    return {
        headerShown: false,
    };
};
SignInScreen.navigationOptions = () =>{
    return {
        headerShown: false,
    };
  };

export default SignInScreen;