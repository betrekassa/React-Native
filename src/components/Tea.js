import React, {useState} from 'react';
import { StyleSheet} from 'react-native';
import {Text , Button , Input} from 'react-native-elements';
import Spacer from './Spacer';
import FormInput from './FormButton';
import { Formik } from "formik";
import * as Yup from "yup";


    const FormValidationSchema = Yup.object().shape(
        {
        email: Yup.string()
            .email("Invalid Email.")
            .required("Required"),
        password: Yup.string()
            .min(6, "Too Short!")
            .required("Required"),
        confirmPassword: Yup.string()
            .required("Required")
            .test(
                "confirm-password-test",
                "Password and confirm password should match",
                    function(value) 
                {
                    return value === this.parent.password;  
                }
                )
        });

const AuthForm =({ headerText, errorMessage , OnSubmit, submitButtonText}) =>{

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

return(
    <>
    <Spacer/>
        <Text h3>{headerText}</Text>
            {/* <Input label="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}
            /> */}
            <FormInput/>
    <Spacer />
 {/*        <Input label="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            autoCapitalize="none"
            autoCorrect={false}
        />  */}
        <FormInput/>
    {errorMessage ? <Text style={ styles.errorMessageStyle }>{errorMessage}</Text> : null}
    <Button title={submitButtonText} onPress={()=>OnSubmit({ email, password })}/>
<Spacer/>
</>
)
};

const styles = StyleSheet.create({
    containerStyle:{
            flex:1,
            justifyContent:'center',
            marginBottom:200     
    },
    errorMessageStyle:{
            fontSize:16,
            color: 'red',
            marginLeft:15,
            marginTop:15
    }, 
    linkStyle:
        {
            color: 'blue'
        }
});

export default AuthForm;