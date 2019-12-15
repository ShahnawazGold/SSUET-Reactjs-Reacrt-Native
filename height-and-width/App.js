import React, { Component } from 'react';
import {
   View ,
   StyleSheet,
    Text
    
    } from 'react-native';

import Horizontal from './components/Horizontal'
import Login from './components/Login'

export default class FixedDimensionsBasics extends Component {
  render() {
    return (
 
        // <View style={{width: 200, height: 59, backgroundColor: 'powderblue'}} />
        <View style={styles.container}>
    
         <Login />

        </View>
      
     
    );
  }
}

const styles = StyleSheet.create({
     container : {
       flex :1,
       backgroundColor :'#fff',
       alignItems :'center',
       justifyContent :'center'
     }
})
