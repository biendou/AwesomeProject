import React, {useState} from 'react';
import {View} from 'react-native';
import VehicleList from './VehicleList';
import AddModal from './AddModal';

const VehicleListScreen = ({navigation}) => {
  // Sample data for vehicles, replace it with your own data source
  const [vehicles, setVehicles] = useState([
    {
      id: 1,
      make: 'Toyota',
      model: 'Camry',
      year: 2022,
      price: 30000,
      color: 'White',
      origin: 'Japan',
      engineType: 'Gasoline',
      odometer: 12000,
    },
    {
      id: 2,
      make: 'Honda',
      model: 'Civic',
      year: 2021,
      price: 25000,
      color: 'Blue',
      origin: 'Japan',
      engineType: 'Gasoline',
      odometer: 8000,
    },
    {
      id: 3,
      make: 'Ford',
      model: 'Mustang',
      year: 2023,
      price: 40000,
      color: 'Red',
      origin: 'USA',
      engineType: 'Gasoline',
      odometer: 5000,
    },
  ]);

  const handleSelectVehicle = vehicle => {
    navigation.navigate('VehicleDetails', {vehicle});
  };

  return (
    <View>
      <VehicleList
        vehicles={vehicles}
        handleSelectVehicle={handleSelectVehicle}
      />
      <AddModal vehicles={vehicles} setVehicles={setVehicles} />
    </View>
  );
};

export default VehicleListScreen;
