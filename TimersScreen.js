import React, { Component } from 'react';
import {
  Button,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  StatusBar,
  ImageBackground,
  Image,
} from 'react-native';

export default class TimersScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      color: 'darkgreen',
      x:''
    };
  }

  
  incrementCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  }

 startCounter=()=> {
   this.setState({x: setInterval(this.incrementCounter, 1000)})
 }
stopCounter = () => {
 //   this.setState({ counter:0});
 clearInterval(this.state.x) 
  }


  render() {
    return (
      <View>
        <Text style={styles.titleText}>Timers</Text>
        <Text style={{ marginTop: 50, marginLeft: 170 }}>
          {this.state.counter}
        </Text>

<Button title="Start Timer" onPress={this.startCounter}></Button>
<Button title="End Timer" onPress={this.stopCounter}></Button>
        <TouchableOpacity
          style={styles.routeCard}
          onPress={() => this.props.navigation.navigate('Home')}>
          <Text style={styles.routeText}>Back</Text>
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
    width: 200,
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
});
