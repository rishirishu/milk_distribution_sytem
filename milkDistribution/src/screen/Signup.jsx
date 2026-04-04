import React, { useEffect } from 'react';
import AppText from '../constraints/AppText.jsx'
import { Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {staticText} from '../constraints/utils/staticText.js'
import CustomForms from '../constraints/CustomForms.jsx'
import { httpClient } from './../components/httpclient';
import axios from 'axios';
import {AndroidToaster} from './../components/AndroidToaster';
import { useNavigation } from '@react-navigation/native';
import {PressableButtons}  from './../components/buttons';



const Signup = () => {
   const navigation = useNavigation();
   const onSubmit = async(data) => {
    try {
       debugger
    const userData = {
      first_name:data["First Name"],
      last_name:data["Last Name"],
      mobile_no:data["contact no"],
      password: data["password"]
    }
    console.log(userData)
    const resp = await httpClient("post","user/signup",userData)
    new AndroidToaster().showToastWithGravityAndOffset("User Created Successfully");
    navigation.navigate("login")
    } catch (error) {
      debugger
      console.log(error);
      new AndroidToaster().showToastWithGravityAndOffset(JSON.stringify(error));
    }
  };
  return (
    <SafeAreaView style={{ padding: 20 }}>
      <AppText text = {staticText.register_here} />
      <AppText text = {staticText.create_your_new_account} size={20} />
      <CustomForms 
        fileds = {["First Name","Last Name","contact no","password","confirm password"]} 
        onSubmit = {onSubmit}
        button_name = {staticText.signup}
        hideField={"password"}
        />
      <PressableButtons text="Already have an Account " onPressFunction={() => navigation.navigate("login")} />
    </SafeAreaView>
  );
};

export default Signup;