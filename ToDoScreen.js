import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  StatusBar,
  ImageBackground,
  Image,
} from 'react-native';

export default class ToDoScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task:"",
      taskList:[],
      displayTask:[]
    };
  }

addTask=()=>{
console.log(this.state.task)
  this.state.taskList.push(this.state.task)
  console.log(this.state.taskList)
  this.setState({displayTask:this.state.taskList})
  console.log(this.state.displayTask)

  
}
  render() {
    return (
      <View>
        <Text style={styles.titleText}>To Do List</Text>

        <TouchableOpacity
          style={styles.routeCard}
          onPress={() => this.props.navigation.navigate('Home')}>
          <Text style={styles.routeText}>Back</Text>
        </TouchableOpacity>

 <TextInput style={styles.inputTask} value={this.state.task}
 onChangeText={text=>this.setState({task:text})}/>
<View>
 {this.state.displayTask.map((task) => (
 
              <TextInput value={task}
              onChangeText={(task)=>this.setState({task:task})}
              ></TextInput>
          ))}
</View>
        <TouchableOpacity
          style={[styles.routeCard,{marginTop:10}]}
          onPress={() => this.addTask()}>
          <Text style={styles.routeText}>Add Task</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.routeCard,{marginTop:-30}]}
          onPress={() => this.state.taskList.pop()}>
          <Text style={styles.routeText}>Remove Task</Text>
        </TouchableOpacity>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'Black',
    textAlign: 'center',
  },
  routeCard: {
    marginLeft: 50,
    marginRight: 50,
    marginTop: 50,
    borderRadius: 30,
    height: 30,
    width: 250,
    justifyContent: 'center',
   position: 'absolute',
    top: 450,
    backgroundColor: 'white',
  },
  routeText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    padding: 30,
    textAlign: 'center',
  },
  inputTask: {
    width:300,
    height:30,
    borderWidth:1,
    alignSelf:"center",
    marginTop:10
  }
});
