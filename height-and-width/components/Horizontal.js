import React, { Component } from 'react';
import {
   View 
   ,StyleSheet, 
   Text,
   Dimensions,
   ScrollView
   
   } from 'react-native';

export default class Horizontal extends Component {
  render() {
    return (
 
        // <View style={{width: 200, height: 59, backgroundColor: 'powderblue'}} />
        <ScrollView 
        horizontal={true}
        pagingEnabled={true}
        style={styles.container}>
        <View style={styles.outer}>
           <Text style= {styles.innertext}>Best Reactjs </Text>
        </View>

         <View style={[styles.outer,styles.red]}>
        <Text style= {styles.innertext}>Best React Native </Text>
        </View>
         <View style={[styles.outer,styles.green]}>
        <Text style= {styles.innertext}>Best IoT Training </Text>
        </View>

        </ScrollView>
      
     
    );
  }
}

const styles = StyleSheet.create({
     container : {
     
     },
     outer :{
       flex:1,
       backgroundColor :'#007bb6',
       alignItems :'center',
       justifyContent:'center',
       width :Dimensions.get('window').width,
       height: Dimensions.get('window').height
     },
     innertext :{
       color :'#fff',
       fontSize: 23,
       fontWeight: 'blold'
     },
     red:{
       backgroundColor :'#dd4b39'
     },
     green : {
       backgroundColor :'#27ae60'
     }


})
