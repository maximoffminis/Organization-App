import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    Image
} from "react-native";

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

render(){
  var date=new Date().getDate()
  var month=new Date().getMonth()
  var year=new Date().getFullYear()
  var hour=new Date().getHours()
  var minutes=new Date().getMinutes()
return(
 <View style={styles.container}> 
<Text style={styles.titleText}>Hello!</Text>
<Text style={styles.titleDate}>{month+1}/{date}/{year}</Text>
<Text style={styles.titleTime}>{hour}:{minutes}</Text> 

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Calendar")
                    }>
                        <Text style={styles.routeText}>Calendar</Text>
                        <Text style={styles.bgDigit}>1</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("To Do")
                    }>
                        <Text style={styles.routeText}>To Do List</Text>
                        <Text style={styles.bgDigit}>2</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Timers")
                    }>
                        <Text style={styles.routeText}>Timers</Text>
                        <Text style={styles.bgDigit}>3</Text>
                    </TouchableOpacity>
 </View> 
)
}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "lavender",
    },
    
     titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "black",
        textAlign: "center"
    },
     titleTime: {
       fontSize: 30,
       textAlign: "center"
     },
     titleDate: {
       fontSize: 30,
       textAlign: "center"
     },
     routeCard: {
        flex: 0.25,
        marginLeft: 40,
        marginRight: 50,
        marginTop: 40,
        borderRadius: 30,
        backgroundColor: 'white'
    },
    routeText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "black",
        textAlign:"left",
        marginTop: 20,
        marginBottom: 20,
        paddingLeft: 10,
        paddingBottom:20

    },
        bgDigit: {
        position: "absolute",
        color: "rgba(183, 183, 183, 0.5)",
        fontSize: 80,
        right: 20,
        bottom: -10,
        zIndex: -1
    },
    })