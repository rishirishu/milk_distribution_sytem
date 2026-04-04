import { StyleSheet, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AppHeader from './../../components/AppHeader';
import CartItem from '../cart/CartItem';
import CheckoutScreen from '../cart/CheckoutScreen';
import { useCart } from '../../redux/cartContext';

const AddToCart = () => {
const {cartItems, removeFromCart,handleIncrease,handleDecrease} = useCart()
  console.log(cartItems,"cefjfdfdffsfsf")

  return (
    <SafeAreaView>
      <AppHeader
      text = "My Cart"
      iconName = "shopping-bag"
      type = "materialicons" />
      <FlatList
        data={cartItems}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <CartItem data={item}
            onDelete={() => removeFromCart(item.id)}
            onIncrease={() => handleIncrease(item.id)}
            onDecrease={() => handleDecrease(item.id)}
          />
        )}
      />
      {
        cartItems.length>0 &&(
          <CheckoutScreen data = {cartItems}/>
        )
      }
      
    </SafeAreaView>
  )
}


export default AddToCart