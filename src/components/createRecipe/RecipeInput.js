import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Modal,
  Alert,
  TouchableHighlight,
} from 'react-native';

const RecipeInput = ({setRecipeName}) => {
  const [textInput, setTextInput] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModalVisibility = () => {
    setModalVisible(!modalVisible);
  };

  const addRecipeName = () => {
    setRecipeName(textInput);
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              style={styles.modalText}
              placeholder="recipe name.."
              value={textInput}
              onChangeText={(text) => setTextInput(text)}
              autoCompleteType="off"
            />
            <View style={styles.modalRow}>
              <TouchableHighlight
                style={{
                  ...styles.modalButton,
                  backgroundColor: '#2196F3',
                  top: 15,
                  right: 20,
                  borderColor: 'black',
                  borderWidth: 0.7,
                }}
                onPress={() => {
                  toggleModalVisibility();
                  addRecipeName();
                }}>
                <Text style={styles.textStyle}>Submit</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={{
                  ...styles.modalButton,
                  backgroundColor: '#2196F3',
                  top: 15,
                  left: 20,
                  borderColor: 'black',
                  borderWidth: 0.7,
                }}
                onPress={() => {
                  toggleModalVisibility();
                }}>
                <Text style={styles.textStyle}>Close</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </Modal>

      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
          addRecipeName();
        }}>
        <Text style={styles.textStyle}>Change recipe name</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  modalView: {
    top: 350,
    height: 140,
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
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalRow: {
    flexDirection: 'row',
  },
  openButton: {
    backgroundColor: '#2196F3',
    borderRadius: 20,
    padding: 8,
    top: 630,
    width: 170,
    left: 110,
  },
  modalButton: {
    backgroundColor: '#2196F3',
    borderRadius: 20,
    padding: 8,
    top: 450,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 15,
  },
  modalText: {
    marginBottom: 15,
    fontSize: 20,
    textAlign: 'center',
  },
});

export default RecipeInput;
