import React, { useState } from 'react';
import { View ,Text, SafeAreaViewBase} from 'react-native';
import Login from './screen/Login';    // check path
import Signup from './screen/Signup';  // check path
import { SafeAreaView } from 'react-native-safe-area-context'



const Authenticate = () => {
  const [isauthenticate, setAuthenticate] = useState(false);

  return (
      <SafeAreaView>
          {isauthenticate ? <Login /> : <Signup />}
      </SafeAreaView>
  );
};

export default Authenticate;
