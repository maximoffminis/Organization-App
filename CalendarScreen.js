import React, { Component } from 'react';
import {Calendar} from 'react-native-calendars'
import {
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

import EventCalendar from 'react-native-events-calendar'
export default class CalendarScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event:[{
        title:"Science Exam",
        start:'2023-08-02 08:00:00',
        end:"2023-08-02 09:00:00"
      },
      {
        title:"Science Exam",
        start:'08-02-2023 08:00:00',
        end:"08-02-2023 09:00:00"
      }
      ]

    };
  }



  render() {
    return (
      <View>
        <Text style={styles.titleText}>Calendar</Text>
<Calendar/> 
<EventCalendar events= {this.state.event} size={60}/>
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
