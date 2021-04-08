import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';

const Card = (pros) =>{
    return(
            <View style={styles.containerStyle}>
                {pros.children}
            </View>
            );
};


const styles = StyleSheet.create({
    containerStyle :
        {
            borderWidth:1,       
            borderRadius:2,
            borderColor:'#ddd',
            borderBottomWidth:0,
            shadowColor: '#000',
            shadowOffset:{width:0, height:2},
            shadowOpacity:0.3,
            shadowRadius:2,
            elevation:1,
            mariginLeft:5,
            marginRight:5,
            marginTop:10
            //justifyContent: flex-center
            //alignContent: center
        },
    textStyle:
        {
            fontSize:18,
            fontStyle: 'italic',
            justifyContent: 'flex-center'
        }
});

export default Card;