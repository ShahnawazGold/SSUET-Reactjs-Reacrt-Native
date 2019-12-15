import React, { Component } from 'react';
import { View ,StyleSheet, Text} from 'react-native';

export default class FixedDimensionsBasics extends Component {
  render() {
    return (
 
        // <View style={{width: 200, height: 59, backgroundColor: 'powderblue'}} />
        <View style={styles.container}>
        <Text>hi shah</Text>



        </View>
      
     
    );
  }
}

const styles = StyleSheet.create({
     container : {
       flex :1,
       backgroundColor :'green',
       alignItems :'center',
       justifyContent :'center'
     }
})
