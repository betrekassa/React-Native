import React, { useContext } from 'react';
import {StyleSheet} from 'react-native';
import {Text, Button} from 'react-native-elements';
import Spacer from '../components/Spacer';
import { SafeAreaView } from 'react-navigation';
import {Context as AuthContext} from '../context/AuthContext';



const AccountScreen = () =>{
    const {signout } = useContext(AuthContext);
    return (
        <SafeAreaView forceInset={ { top: 'always' }}>
            <Spacer/>
        <Text style={styles.textStyle}>Sign Out</Text>
            <Button tittle="Sign Out" onPress={signout}/>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    textStyle:{
        fontSize:48
    }
});


export default AccountScreen;
