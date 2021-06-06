import React, {useState} from 'react'
import { StyleSheet, Text, View , TextInput , Button } from 'react-native';

function AddTodo({ submitHandler }) {
    const [text, setText] = useState('');
    const changeHandler = (val) =>{
        setText(val);

    }
    return (
       <View>
           <TextInput 
              placeholder='new todo....'
              onChangeText={changeHandler}
              style={StyleSheet.input}
              
              />
              <Button onPress={() => submitHandler(text)} title='Add' color='coral'/>
       </View>
    )
}
const styles = StyleSheet.create({
    input: {
        marginBottom: 30,
        paddingHorizontal: 8,
        paddingVertical:6,
        borderBottomWidth:2,
        borderBottomColor:'#ddd',
        
    }
})


export default AddTodo
