import React from 'react';
import {View} from 'react-native';
import VehicleDetails from './VehicleDetails';

const VehicleDetailsScreen = ({route}) => {
  const {vehicle} = route.params;

  return (
    <View>
      <VehicleDetails vehicle={vehicle} />
    </View>
  );
};

export default VehicleDetailsScreen;
