// import { View, Text } from 'react-native'
// import React, { useEffect } from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context'
// import { Image } from 'react-native/types_generated/index'
// import Authenticate from './src/AppAuthenticate'
// import { Provider } from 'react-redux'
// import {store } from './src/redux/store'

// const App = () => {
//   return (
//     <SafeAreaView>
//      <Provider store={store}>
//       <Authenticate />
//      </Provider>
//     </SafeAreaView>
//   )
// }

// export default App


import React from "react";
import { Provider } from "react-redux";
import { persistor, store } from "./src/redux/store";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import RootStack from "./src/navigations/ScreenNavigation";
import { enableScreens } from "react-native-screens";
import { PersistGate } from './node_modules/redux-persist/es/integration/react';
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const App = () => {
  enableScreens();
  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
     <View style={styles.safeArea}>
      <NavigationContainer   theme={{
          ...DefaultTheme,
          colors: {
            ...DefaultTheme.colors,
            background: "#bee6f7ff", // 🌈 global background color
          },
        }}>
        <RootStack/>
      </NavigationContainer>
     </View>
    </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: 30, // ✅ global top padding for all screens
    backgroundColor: "#bee6f7ff", // match your theme background
  },
});

export default App;
