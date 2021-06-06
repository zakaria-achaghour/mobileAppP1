import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default  function header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}> MY TODOS</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    header: {
      
        backgroundColor: 'coral',
        height:80,
        paddingTop:38,
         alignItems: 'center',
         justifyContent: 'center',
      },
      title: {
          fontSize:20,
          color:'#fff',
          fontWeight:'bold',
      }
});

