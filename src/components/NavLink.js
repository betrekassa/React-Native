import React from 'react';
import {Text , TouchableOpacity , StyleSheet} from 'react-native';

import Spacer from './Spacer';

import { withNavigation} from 'react-navigation';

const NavLink = ({navigation, text, linkText, routeName}) =>{
    return (
        <TouchableOpacity onPress={()=> navigation.navigate(routeName)}>
           <Text style={ style.linkStyle }>
            {linkText}
        </Text>
        <Text style={ style.textStyle }>
            {text}
        </Text>
     
        </TouchableOpacity>
    );

};
const style = StyleSheet.create({
    textStyle:{
        color:'red',
        textAlign:'center'
    },
    linkStyle:
        {
            color: 'blue',
            textAlign:'center'
        }
});

export default withNavigation(NavLink);