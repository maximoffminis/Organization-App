import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./Screens/HomeScreen";
import CalendarScreen from "./Screens/CalendarScreen";
import TimersScreen from "./Screens/TimersScreen";
import ToDoScreen from "./Screens/ToDoScreen";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Calendar" component={CalendarScreen} />
        <Stack.Screen name="Timers" component={TimersScreen} />
        <Stack.Screen name="To Do" component={ToDoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;