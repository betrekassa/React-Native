import axios from 'axios';
import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import {Header, icon} from 'react-native-elements';
//import { Text } from 'react-native';
import CitiationDetailScreen from './CitiationDetailScreen';

class CitiationListScreen extends Component{
    state = {users:[]};

    componentWillMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((responseData) => {
          this.setState({users : responseData})
        }).catch(console.log('wow!'));
      }

      getUsers(){
        
       return  this.state.users.map(user => 
              <CitiationDetailScreen key={user.id} 
                          name = {user.name} 
                          email = {user.email}
                          address ={user.address}
              />);
      }
    render()
    {
        return(
            <>
              {this.getUsers()}
            </>   
            );
    }
};

export default CitiationListScreen;
