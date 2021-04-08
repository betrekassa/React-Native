import React,{Component, useState} from 'react';
import {View , StyleSheet} from 'react-native';
import {Input, Button, Card} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
//import LinearGradient from 'react-native-linear-gradient';
//import { Label, Form, FormItem } from 'react-native-form-component';

class DriverProfileCreateScreen extends Component {
    
    render()
    {

       return (
        <Card>
            <Card.Title>Profile</Card.Title>
            <Card.Divider/>
            <Input  placeholder='First Name'
                    leftIcon={
                                <Icon
                                name='user'
                                size={24}
                                color='black'
                                />
                            }
            />
            <Input  placeholder='Last Name'
                    leftIcon={
                                <Icon
                                name='user'
                                size={24}
                                color='black'
                                />
                            }
            />
            <Input  placeholder='Driver License'
                    leftIcon={
                                <Icon
                                name='address-card'
                                size={24}
                                color='black'
                                />
                            }
            />
      <Input  placeholder='555-453-9564'
                    leftIcon={
                                <Icon
                                name='phone'
                                size={24}
                                color='green'
                                />
                            }
            />
     <Input  placeholder='Kebela'
                    leftIcon={
                                <Icon
                                name='address-card'
                                size={24}
                                color='green'
                                />
                            }
            />
         <Input  placeholder='Wereda'
                    leftIcon={
                                <Icon
                                name='address-card'
                                size={24}
                                color='green'
                                />
                            }
            />
              <Input  placeholder='Blood Type'
                    leftIcon={
                                <Icon
                                name='heartbeat'
                                size={24}
                                color='green'
                                />
                            }
            />
            <Input  placeholder='Organ Donor'
                    leftIcon={
                                <Icon
                                name='ambulance'
                                size={24}
                                color='green'
                                />
                            }
            />
            <Card.Divider/>
        <View style={{ justifyContent:'flex-center', alignContent: 'center', flex:1, flexDirection:'row'}}>
            <Button title="Subimit"/>
            <Button title="Cancel"/>
        </View>
      </Card>
    )
    
}
};
const style = StyleSheet.create({});


export default DriverProfileCreateScreen;
