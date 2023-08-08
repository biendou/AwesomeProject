import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TextInput,
} from 'react-native';

const AddModal = props => {
  const {vehicles, setVehicles} = props;
  const [modalVisible, setModalVisible] = useState(false);
  const [model, setModel] = useState('');
  const [make, setMake] = useState('');
  const [year, setYear] = useState('');
  const [price, setPrice] = useState('');
  const [color, setColor] = useState('');
  const [engineType, setEngineType] = useState('');
  const [origin, setOrigin] = useState('');
  const [odometer, setOdometer] = useState('');

  const addVehicle = () => {
    const newVehicle = {
      id: vehicles.length + 1,
      model: model,
      make: make,
      year: year,
      price: price,
      color: color,
      engineType: engineType,
      origin: origin,
      odometer: odometer,
    };
    setVehicles([...vehicles, newVehicle]);
    setModalVisible(!modalVisible);
    setModel('');
    setMake('');
    setYear('');
    setPrice('');
    setColor('');
    setEngineType('');
    setOrigin('');
    setOdometer('');
  };
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <View style={{backgroundColor: 'gold'}}>
              <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                placeholder={'Please enter the model'}
                placeholderTextColor={'black'}
                value={model}
                onChangeText={setModel}
              />
              <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                placeholder={'Please enter the make'}
                placeholderTextColor={'black'}
                value={make}
                onChangeText={setMake}
              />
              <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                placeholder={'Please enter the year'}
                value={year}
                placeholderTextColor={'black'}
                onChangeText={setYear}
              />
              <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                placeholder={'Please enter the price'}
                value={price}
                placeholderTextColor={'black'}
                onChangeText={setPrice}
              />
              <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                placeholder={'Please enter the color'}
                value={color}
                placeholderTextColor={'black'}
                onChangeText={setColor}
              />
              <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                placeholder={'Please enter the engine type'}
                value={engineType}
                placeholderTextColor={'black'}
                onChangeText={setEngineType}
              />
              <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                placeholder={'Please enter the origin'}
                value={origin}
                placeholderTextColor={'black'}
                onChangeText={setOrigin}
              />
              <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                placeholder={'Please enter the odometer'}
                value={odometer}
                placeholderTextColor={'black'}
                onChangeText={setOdometer}
              />
            </View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => addVehicle()}>
              <Text style={styles.textStyle}>Save</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Add Vehicle</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    height: 50,
    borderRadius: 20,
    padding: 10,
    // height: 60,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F1949F',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: 'black',
  },
});

export default AddModal;
