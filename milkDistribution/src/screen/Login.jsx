import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AppText from '../constraints/AppText'
import CustomForms from '../constraints/CustomForms'
import { staticText } from '../constraints/utils/staticText'
import { useDispatch, useSelector } from 'react-redux'
import { loginSuccess } from '../redux/userSlice'
import { CustomButtons, PressableButtons } from './../components/buttons';
import { useNavigation } from '@react-navigation/native'
import { httpClient } from '../components/httpclient'
import { AndroidToaster } from '../components/AndroidToaster'

const Login = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    //  const { user, token, isAuthenticated } = useSelector((state) => state.user);

    const onSubmit = async(data) => {
      try {
         debugger
      console.log(data)
      const payload = {
        mobile_no:data["contact_no"],
        password:data["password"]
      }
      const resp = await httpClient("post","user/login",payload)
      debugger
      if (resp.status===200){
        dispatch(loginSuccess({ user: resp.data }));
        new AndroidToaster().showToastWithGravityAndOffset("Logged in Successfully");
        navigation.navigate("dashboard")
      }else{
        new AndroidToaster().showToastWithGravityAndOffset(resp.data);
      }
      } catch (error) {
        debugger
        new AndroidToaster().showToastWithGravityAndOffset("Something went wrong");
        console.log(error)
        
      }
    };
  return (
    <SafeAreaView style={{ padding: 20 }}>
      <AppText text={staticText.login_here} />
      {/* <AppText text={staticText.create_your_new_account} size={20} /> */}
      <CustomForms 
        fileds={["contact_no","password"]} 
        onSubmit={onSubmit} 
        button_name = {staticText.login}
        hideField = "password"
      />
      <CustomButtons text = "Forget Password" onPressFunction={() => navigation.navigate("Reset")}/>
      <PressableButtons text="Do not have Account" onPressFunction={() => navigation.navigate("signup")} />
    </SafeAreaView>
  )
}

export default Login