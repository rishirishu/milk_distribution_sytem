// import { Text } from 'react-native'
// import React, { useState } from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context'
// import { Modal } from 'react-native'
// import AndroidToaster from './AndroidToaster';

// const PopupModal = () => {
//     const [visibleModel,setModelVisible] = useState(true);
//   return (
//     <SafeAreaView>
//      <Modal
//           animationType="slide"
//           transparent={true}
//           visible={visibleModel}
//           onRequestClose={() => {
//            new AndroidToaster().showToastWithGravityAndOffset("Popup has been closed.");
//             setModelVisible(!visibleModel);
//           }}></Modal>
//       <Text>popupModal</Text>
//     </SafeAreaView>
//   )
// }

// export default PopupModal


import React, { useState } from 'react';
import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import {AndroidToaster} from './AndroidToaster';

const PopupModal = ({data}) => {
  const [visibleModal, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visibleModal}
        onRequestClose={() => {
          new AndroidToaster().showToastWithGravityAndOffset("Popup has been closed.");
          setModalVisible(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Popup Modal</Text>
            <Pressable
              style={styles.button}
              onPress={() => {
                new AndroidToaster().showToastWithGravityAndOffset("Closing Popup");
                setModalVisible(false);
              }}
            >
              <Text style={styles.buttonText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default PopupModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)', // dim background
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#2196F3',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});
