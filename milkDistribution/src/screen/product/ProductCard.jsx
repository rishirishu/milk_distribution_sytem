import * as React from 'react';
import { Text, Card, Button, Icon } from '@rneui/themed';
import { Image, StyleSheet } from 'react-native';
import { useCart } from '../../redux/cartContext';
import { PressableButtons } from '../../components/buttons';
import { AndroidToaster } from '../../components/AndroidToaster';


export default function ProductCard({ item }) {
  const { addToCart,cartItems } = useCart();

  return (
    <>
    <Card containerStyle={{ marginTop: 15 }}>
          <Card.Title>{item.name}</Card.Title>
          <Card.Divider />
           <Image
            style={{ width: 100, height: 100}}
            source={{
              uri: item.picture|| 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
          <Text style={styles.fonts} h1>
           {item.description} 
          </Text>
          <Text style={styles.fonts} h2>
           {item.price}
          </Text>
          <Text style={styles.fonts} h3>
            {item.fat_content}
          </Text>   
          <PressableButtons 
          text = "Add items" 
          onPressFunction={()=>{const exists = cartItems.some(prev => prev.id === item.id);
            if (!exists) {
              addToCart(item);
            }else{
               new AndroidToaster().showToastWithGravityAndOffset("item already in cart");
            }}}  
            />
        </Card>
    </>
  );
}

const styles = StyleSheet.create({
container: {
  flex: 1,
},
fonts: {
  marginBottom: 8,
},
user: {
  flexDirection: 'row',
  marginBottom: 6,
},
image: {
  width: 30,
  height: 30,
  marginRight: 10,
},
name: {
  fontSize: 16,
  marginTop: 5,
},
});

