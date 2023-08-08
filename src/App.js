import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import VehicleListScreen from './VehicleListScreen';
import VehicleDetailsScreen from './VehicleDetailsScreen';
import {Text} from 'react-native';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="VehicleList" component={VehicleListScreen} />
        <Stack.Screen name="VehicleDetails" component={VehicleDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
