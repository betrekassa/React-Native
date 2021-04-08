import React,{useContext , useState} from "react";
import AuthForm from '../components/AuthForm';
import {  StyleSheet,
          View,
        } from "react-native";

import {NavigationEvents} from 'react-navigation';

import {Context as AuthContext} from '../context/AuthContext';
//import NavLink from '../components/NavLink';
import SignInScreen from "./SignInScreen";
import Styles from '../styles/Styles';


const SignUpScreen =({ navigation }) => {

    const { state , signup , cleanErrorMessage} = useContext(AuthContext);    
    return (
      <View style={Styles.container}>
      <NavigationEvents 
         onWillBlur={cleanErrorMessage}
      />
      <AuthForm
          headerText="Sign Up"
          errorMessage={state.errorMessage}
          submitButtonText="Sign In"
          OnSubmit = {signup}
          isconfirmPassword= {true}
          routeNames="SignIn"
          linkText="Have An Account?"
      />
  </View>
);
};
SignUpScreen.navigationOptions = () =>{
  return {
      headerShown: false,
  };
};

export default SignUpScreen;
