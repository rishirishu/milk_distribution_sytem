import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppRoutes } from './../components/routes';
import { useSelector } from "react-redux";

const Stack = createNativeStackNavigator();

const RootStack = () => {
    const { user, isAuthenticated } = useSelector((state) => state.user);
    debugger
    console.log(user)
  return (
    <Stack.Navigator initialRouteName={isAuthenticated?"dashboard":"signup"}>
    {
    Object.entries(AppRoutes).map(([key,value],ind)=>(
      <>
      {
        <Stack.Screen
          key={key}
          name={value.path}
          component={value.component}
          options={{ headerShown: value.headerShown || false, title: value.title}}
        />
      }
      </>

    ))
    }
    </Stack.Navigator>
  );
};

export default RootStack;
