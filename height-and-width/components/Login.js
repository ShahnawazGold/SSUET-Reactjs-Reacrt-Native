import React, { Component } from 'react';
import {
   View ,
   StyleSheet,
    Text,
    Image,
    Dimensions,
    KeyboardAvoidingView
    
    } from 'react-native';

    import MyFrom from './Myfrom'

export default class Login extends Component {
  render() {
    return (
 
        <KeyboardAvoidingView behavior="padding " style={styles.container}>
         <View style={styles.logocontainer}>
          <Image style={styles.logo} source={require('./images/ailogo3.png')} />

          <Text> Login</Text>
         </View>

         <View style={styles.myfrom}>
         <MyFrom />
         
         </View>

        </KeyboardAvoidingView>
      
     
    );
  }
}

const styles = StyleSheet.create({
     container : {
       flex :1,
       width : Dimensions.get('window').width,
       backgroundColor :'#282830'
     },
     logocontainer:{
    
       flexGrow :1,
       alignItems :'center',
       justifyContent :'center'
     },
     logo: {
       width :100,
       height :100
     },
     myfrom :{
       flex :1
     },
     title :{
       color :'#fff'
     }

})
