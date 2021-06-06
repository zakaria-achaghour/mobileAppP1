
import React , {useState} from 'react';
import { StyleSheet, Text, View ,TextInput,ScrollView,FlatList , TouchableOpacity, Alert,TouchableWithoutFeedback,Keyboard} from 'react-native';
import  Header  from './components/header';
import  TodoItem  from './components/todoItem';
import  AddTodo  from './components/addTodo';
import Sandbox from './components/sandbox';



export default function App() {
 

const [todos,setTodos] = useState([
  {text:'Buy Coffee', key:'1'},
  {text:'Create An App', key:'2'},
  {text:'Play on the switch', key:'3'},

])

const pressHandler = (key) => {
  setTodos((prevTodos) => {
    return prevTodos.filter(todo => todo.key != key);
  })
}

const submitHandler = (text) => {

  if(text.length >= 3){
    setTodos((prevTodos)=>{
      return [
        {text:text , key:Math.random().toString()},
        ...prevTodos,
        
      ]
     })
  }else {
    Alert.alert('OOPS!','TODOS must be grather than 3 char or equal',[
      {text:'unterstood',onPress:()=>console.log('alert closed')}
    ])
  }

}
  return (
   // <Sandbox />


    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log('dismissed key board') ;
    }}>

    
    <View style={styles.container}>
      {/* header */}

         <Header />
          <View style={styles.content}>
              <AddTodo submitHandler={ submitHandler }/>
              <View style={styles.list}>
                    <FlatList  data={todos} renderItem={({item}) =>(
                      <TodoItem item={ item } pressHandler = {pressHandler}/>
                    )} />
              </View>
          </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  content: {
    padding: 40,
    paddingHorizontal:20,
    flex: 1,
    
  },
  list:{
    marginTop:20,
    marginBottom:15,
    flex: 1,

  }



});
