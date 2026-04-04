// import { StatusBar, StyleSheet, Text, ToastAndroid, View } from 'react-native'
// import React from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context';

const { ToastAndroid } = require("react-native");

// const AndroidToaster = ({toasterType=String}) => {
  //   const showToast = () => {
  //   ToastAndroid.show('A pikachu appeared nearby !', ToastAndroid.SHORT);
  // };
  //  const showToastWithGravity = () => {
  //   ToastAndroid.showWithGravity(
  //     'All Your Base Are Belong To Us',
  //     ToastAndroid.SHORT,
  //     ToastAndroid.CENTER,
  //   );
  // };

  // const showToastWithGravityAndOffset = () => {
  //   ToastAndroid.showWithGravityAndOffset(
  //     'A wild toast appeared!',
  //     ToastAndroid.LONG,
  //     ToastAndroid.BOTTOM,
  //     25,
  //     50,
  //   );
  // };
//   return (
//     <SafeAreaView style={styles.container}> 
//        { toasterType=="short"?showToastWithGravity:showToastWithGravityAndOffset}
//       {/* <Text>AndroidToaster</Text> */}
//     </SafeAreaView> 
//   )
// }

// export default AndroidToaster

// const styles = StyleSheet.create({
//       container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingTop: StatusBar.currentHeight,
//     backgroundColor: '#888888',
//     padding: 8,
//   },
// });


export class AndroidToaster {

  showToast = (mesage) => {
    ToastAndroid.show(mesage, ToastAndroid.LONG);
  };
  showToastWithGravity = (msg) => {
    ToastAndroid.showWithGravity(
      msg,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };

  showToastWithGravityAndOffset = (msg) => {
    ToastAndroid.showWithGravityAndOffset(
      msg,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
  };

}