import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import DetailsScreen from './Details';
import VehicleList from './VehicleList';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={VehicleList}
          options={{title: 'Overview'}}
        />
        {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
