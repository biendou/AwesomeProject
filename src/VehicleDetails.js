import React from 'react';
import {View, Text} from 'react-native';
const styles = {
  container: {
    backgroundColor: 'green',
    // height: 50,
    margin: 10,
    padding: 5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'baseline',
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'dashed',
  },
  text: {color: 'black', fontSize: 20},
};
const VehicleDetails = ({vehicle}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Make: {vehicle.make}</Text>
      <Text style={styles.text}>Model: {vehicle.model}</Text>
      <Text style={styles.text}>Model: {vehicle.year}</Text>
      <Text style={styles.text}>Model: {vehicle.price}</Text>
      <Text style={styles.text}>Model: {vehicle.color}</Text>
      <Text style={styles.text}>Model: {vehicle.engineType}</Text>
      <Text style={styles.text}>Model: {vehicle.odometer}</Text>
      <Text style={styles.text}>Model: {vehicle.origin}</Text>
      {/* Add other details about the vehicle */}
    </View>
  );
};

export default VehicleDetails;
