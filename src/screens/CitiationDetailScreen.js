import React from 'react';
import { ShadowPropTypesIOS } from 'react-native';
import {View, StyleSheet, Image,Text } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
//import PaymentIcon from '@material-ui/icons/Payment';
//import Card from '../components/Card';
//import CardItem from '../components/CardItem';
const CitiationDetailScreen = (props) =>{

    return (<Card>
        <Card.Title>Citations</Card.Title>
        <Card.Divider/>
                    <Text style={styles.textStyle}>Name:- {props.name}</Text>
                    <Text style={styles.textStyle}>Email:- {props.email}</Text>
                    <Text style={styles.textStyle}>Street:-{props.address.street}</Text>
                    <Text style={styles.textStyle}>City:-{props.address.city}</Text>
                    <Button icon="money" title="Pay"/>
           </Card>
        )

};
const styles = StyleSheet.create({
    textStyle:
        {
            fontSize:18,
            fontStyle: 'italic',
            justifyContent: 'flex-center'
        }
});

export default CitiationDetailScreen;