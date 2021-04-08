import React from 'react';
import { StyleSheet} from 'react-native';
import { Button, Header, Text} from 'react-native-elements';

const TrackListScreen = ({navigation}) =>{
    return (
        <>
            <Header
                leftComponent={{ icon: 'menu', color: '#fff' , onPress:()=> navigation.navigate('TrackDetail')}}
                centerComponent={{ text: 'Driver', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' , onPress: () => alert('Home'),}}
            />
            <Text>Hello</Text>
            <Button tittle="Sign Up"/>
        </>
    )
};

const style = StyleSheet.create({});

TrackListScreen.navigationOptions = () =>{
    return {
        headerShown: false,
    };
  };

export default TrackListScreen;
