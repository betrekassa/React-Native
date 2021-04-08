import React, {useState} from 'react';
import {Text , Button , Input} from 'react-native-elements';
import Spacer from './Spacer';
import FormInput from '../components/FormInput';
import {  View,
          KeyboardAvoidingView
        } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import NavLink from '../components/NavLink';
import Styles from '../styles/Styles';


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

const AuthForm =({ headerText, errorMessage , OnSubmit, routeNames, isconfirmPassword, submitButtonText, linkText}) =>{

return(
    <>
   <Formik
     initialValues={{ email: "", password: "", confirmPassword: "" }}
     validationSchema={FormValidationSchema}
        >
        {({
        handleChange,
        handleBlur,
        values,
        errors,
        isValid,
        touched
        }) => {
    return (
       <View style = {Styles.loginScreenContainer}>
             <Text style={Styles.logoText}>{headerText}</Text>
          <FormInput
             name="email"
             value={values.email}
             placeholder="Enter email"
             autoCapitalize="none"
             onChangeText={handleChange("email")}
             onBlur={handleBlur("email")}
           // onChangeText={this.handleEmailChange}
             iconName="email"
             iconColor="#2C384A"
           />
     <Text style={{ color: "red" }}>
       {touched.email && errors.email}
     </Text>
     <FormInput
         name="password"
         value={values.password}
         onChangeText={handleChange("password")}
         onBlur={handleBlur("password")}
         placeholder="Password"
         secureTextEntry
         iconName="account-key"
         iconColor="#2C384A"
   />
   <Text style={{ color: "red" }}>
     {touched.password && errors.password}
   </Text>
   {isconfirmPassword &&
   <FormInput
     name="password"
         value={values.confirmPassword}
         onChangeText={handleChange("confirmPassword")}
         onBlur={handleBlur("confirmPassword")}
         placeholder="confirm Password"
         secureTextEntry
         iconName="account-key"
         iconColor="#2C384A"
   />}
   <Text style={{ color: "red" }}>
{touched.confirmPassword && errors.confirmPassword}
</Text>
<Button style= {Styles.fbLoginButton} onPress={()=>OnSubmit({ email: values.email, password: values.password })} title="Submit" />
<NavLink 
                routeName={routeNames}
                linkText={linkText}
                text={submitButtonText}
            />
</View>
);
}}
</Formik>
</>
);
}

export default AuthForm;