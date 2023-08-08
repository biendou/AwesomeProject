import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';

const VehicleList = ({vehicles, handleSelectVehicle}) => {
  return (
    <View>
      <FlatList
        data={vehicles}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            style={{
              backgroundColor: 'green',
              height: 50,
              margin: 10,
              padding: 5,
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: 'black',
              borderWidth: 1,
              borderStyle: 'dashed',
              color: 'black ',
            }}
            onPress={() => handleSelectVehicle(item)}>
            <Text>
              {item.make} - {item.model}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default VehicleList;
