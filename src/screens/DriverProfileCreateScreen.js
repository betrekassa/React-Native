import React,{Component, useState} from 'react';
import { TextInput , Alert } from 'react-native';
import { SafeAreaView } from 'react-native';
import {View , StyleSheet} from 'react-native';
import {Input, Button, Card, CheckBox, List , ListItem} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
//import LinearGradient from 'react-native-linear-gradient';
//import { Label, Form, FormItem } from 'react-native-form-component';


  
const DriverProfileCreateScreen =()=> {

    const [Profiles, setProfiles] = useState(
            {
                    firstName:''
                ,   lastName:''
                ,   phoneNumber:''
                ,   driverLicence:''
                ,   kebela:''
                ,   Wereda:''
          //      ,   bloodType:''
                ,   organDonor:0

            });
            
    const   handleSubmit = () =>
    {
        Alert.alert(
            'Alert Title',
            'My Alert Msg',
            [
              {
                text: 'Ask me later',
                onPress: () => console.log('Ask me later pressed')
              },
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel'
              },
              { text: 'OK', onPress: () => console.log('OK Pressed') }
            ],
            { cancelable: false }
          );
        //console.log(Profiles.firstName); 
        // Alert.alert(
        //     "Alert Title",
        //     "My Alert Msg",
        //     ` 
        //   ____Your Details____\n 
        //   FirstName : ${Profiles.firstName} 
        //   LastName : ${Profiles.lastName} 
        //   Phone Number : ${Profiles.phoneNumber} 
        //   Driver Lic : ${Profiles.driverLicence} 
        //   Kebela : ${Profiles.kebela}
        //   Wereda : ${Profiles.Wereda}
        //   OrganDonor: ${Profiles.organDonor}`,
        //   [
        //     {
        //       text: "Cancel",
        //       onPress: () => console.log("Cancel Pressed"),
        //       style: "cancel"
        //     },
        //     { text: "OK", onPress: () => console.log("OK Pressed") }
        //   ],
        //   { cancelable: false })
    } 
      
       return (
        <View style={styles.container}>
        <Card>
            <Card.Title>Profile</Card.Title>
            <Card.Divider/>
            <Input style={styles.input} 
                    placeholder='First Name'
                    errorStyle={{ color: 'red' }}
                    errorMessage='ENTER A VALID ERROR HERE'
                    value = {Profiles.firstName}
                    //onChangeText={onChange = {e=>setFruit({...fruit,name:e.target.value})}}
                    //onChange={(evt) => handleInputChange(evt,'firstName')}
                    onChange={e => setProfiles({ ...Profiles,firstName : e.target.value })}
                    leftIcon={
                                <Icon
                                name='user'
                                size={24}
                                color='green'
                                />
                            }
            />
           <Input style={styles.input} 
                    placeholder='Last Name'
                    value = {Profiles.lastName}
                    //onChangeText={onChange = {e=>setFruit({...fruit,name:e.target.value})}}
                    //onChange={(evt) => handleInputChange(evt,'firstName')}
                    onChange={e => setProfiles({ ...Profiles, lastName : e.target.value })}
                    leftIcon={
                                <Icon
                                name='user'
                                size={24}
                                color='green'
                                />
                            }
            />
            <Input  placeholder='Driver License'
            value={Profiles.driverLicence}
            onChange={e => setProfiles({ ...Profiles,driverLicence : e.target.value })}
            leftIcon={
                            <Icon
                                name='address-card'
                                size={24}
                                color='green'
                            />
                     }
            />
      <Input  style={styles.input} placeholder='555-453-9564'
      value={Profiles.phoneNumber}
      onChange={e => setProfiles({...Profiles, phoneNumber : e.target.value })}
                    leftIcon={
                                <Icon
                                name='phone'
                                size={24}
                                color='green'
                                />
                            }
            />
     <Input align='center' placeholder='Kebela'
     value={Profiles.kebela}
      onChange={e => setProfiles({...Profiles, kebela : e.target.value })}
 
                    leftIcon={
                                <Icon
                                name='address-card'
                                size={24}
                                color='green'
                                />
                            }
            />
         <Input align='stretch' placeholder='Wereda'
         value={Profiles.Wereda}
         onChange={e => setProfiles({...Profiles, Wereda : e.target.value })}
                    leftIcon={
                                <Icon
                                name='address-card'
                                size={24}
                                color='green'
                                />
                           }
        
        />
        <CheckBox
                icon='hospital'
                title='Organ Donor'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={Profiles.organDonor}
                onPress={e => setProfiles({...Profiles, organDonor : !Profiles.organDonor })}
        />
        <Card.Divider/>
        <View style={{ marginleft:150, justifyContent:'flex-center', alignItems: 'center', flex:1, flexDirection:'row'}}>
            <Button style = {styles.submitButton} title="Subimit" onPress={handleSubmit}/>
            <Button style={styles.submitButton}title="Cancel"/>
        </View>
</Card>
      </View>
    )    
};
const styles = StyleSheet.create({
 container: {
       paddingTop: 20
    },
    input: {
       margin: 2,
       height: 5,
       //borderColor: '#7a42f4',
       //borderWidth: 1
    },
    submitButton: {
       padding: 10,
       margin: 15,
       height: 40,
    },
    submitButtonText:{
       color: 'white'
    }, address:
    {
        flex: 1, 
        flexDirection: 'row',
        justifyContent:'center'
    }
});


export default DriverProfileCreateScreen;
