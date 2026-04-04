import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tracker from './../screen/dashboardTabs/Tracker';
import AddToCart from './../screen/dashboardTabs/AddToCart';
import { Icon } from '@rneui/base';
import { useCart } from './../redux/cartContext';
import Home from '../screen/dashboardTabs/Home';
import AccountDetails from './../screen/dashboardTabs/AccountDetails';


const Tab = createBottomTabNavigator();

const InnerTabNavigations = ({chooseIcon}) => {
    const {cartItems} = useCart()
    console.log(cartItems,"cartItems")
  return (
     <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarBadge: route.name === "Cart" && cartItems.length > 0
          ? cartItems.length
          : undefined,
          headerShown: false,
          tabBarActiveTintColor: "#FFA500",
          tabBarInactiveTintColor: "#fff",
          tabBarStyle: {
            backgroundColor: "#1a2b4c",
            borderTopWidth: 0,
            height: 60,
            paddingBottom: 5,
          },
          tabBarIcon: ({color, size,}) => {
            return  <Icon {...chooseIcon(route)} color={color} size={25}  />;
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Tracker" component={Tracker}/>
        <Tab.Screen name="Account" component={AccountDetails}/>
        <Tab.Screen name="Cart" component={AddToCart}/>
      </Tab.Navigator>
  )
}

export default InnerTabNavigations