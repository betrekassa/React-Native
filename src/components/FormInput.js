import React from 'react'
import { Input } from 'react-native-elements'
import { StyleSheet, View } from 'react-native'
//import { Ionicons } from '@expo/vector-icons'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Styles from '../styles/Styles';

const FormInput = ({
  iconName,
  iconColor,
  returnKeyType,
  keyboardType,
  name,
  placeholder,
  value
  ,...rest
}) => (
  <View style={Styles.loginFormTextInput}>
    <Input 
      {...rest}
      //leftIconContainerStyle={<Icon name={iconName} size={28} color={iconColor} />}
      leftIcon={<Icon name={iconName} style = {Styles.Input} size={24} color={iconColor} />}
      //leftIconContainerStyle={styles.iconStyle}
      placeholderTextColor="grey"
      name={name}
      value={value}
      placeholder={placeholder}
      //style={styles.input}
    
    />
  </View>
)

export default FormInput;