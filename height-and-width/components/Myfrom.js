import React, { Component } from 'react';
import {
   View ,
   StyleSheet,
    Text,
    TextInput,
    TouchableOpacity 

    
    } from 'react-native';


export default class MyFrom extends Component {
  render() {
    return (
 
        // <View style={{width: 200, height: 59, backgroundColor: 'powderblue'}} />
        <View style={styles.container}>
    
    
            <Text>HI</Text>
            <TextInput placeholder ="Username" style={styles.input} />
             <TextInput placeholder ="Password" style={styles.input} />

             
             <TouchableOpacity style={styles.bottoncontainer}> 

             <Text style={styles.buttontext} >Login</Text>
             
             </TouchableOpacity>

        </View>
      
     
    );
  }
}

const styles = StyleSheet.create({
     container : {
       flex :1,
       padding :20
      
     },
     input :{
       height :40, 
       backgroundColor :'green',
       paddingLeft :10,
       marginBottom :15
     },
     bottoncontainer :{
       backgroundColor :'#27ae60',
       paddingVertical:15
     },
     buttontext :{
       textAlign :'center',
       color: '#fff',
       fontWeight :'bold'
     }
})
