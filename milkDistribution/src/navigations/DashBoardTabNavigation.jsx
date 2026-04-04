import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from '@rneui/themed'; 
import Home from '../screen/dashboardTabs/Home';
import Tracker from './../screen/dashboardTabs/Tracker';
import Profile from '../screen/user/Profile';
import ProductCard from '../screen/product/ProductCard';
import AddToCart from './../screen/dashboardTabs/AddToCart';
import { CartProvider, useCart } from './../redux/cartContext';
import InnerTabNavigations from './InnerTabNavigations';
import { appIcons } from "../constraints/utils/defaultIcons";

const Tab = createBottomTabNavigator();

const DashBoardTabNavigation = () => {
  const chooseIcon = (route) =>{
    if (route.name === "Home") {
      // return { name: "home"};
      return appIcons.home
    }else if (route.name === "Tracker") {
      return appIcons.tracker
      // return { name: "assistant-navigation", type: "materialicons"};
    }else if (route.name === "Account") {
      return appIcons.account
      // return { name: "person-circle-outline", type: "ionicon" };
    }else if (route.name === "Cart") {
      return appIcons.cart
      // return { name: "shopping-cart", type: "lucide" };
    } else {
      return { name: "home", type: "antdesign" };
    }   
  }
  return (
    <CartProvider>
        <InnerTabNavigations chooseIcon={chooseIcon} />
    </CartProvider>
  );
};

export default DashBoardTabNavigation;
