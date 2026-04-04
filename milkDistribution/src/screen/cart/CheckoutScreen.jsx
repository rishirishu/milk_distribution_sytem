import React, { useMemo, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { ListItem } from '@rneui/base';
import { AndroidToaster } from '../../components/AndroidToaster';
import { useNavigation } from '@react-navigation/native';

const CheckoutScreen = ({data}) => {
  const navigation = useNavigation();
  const [discountCode, setDiscountCode] = useState('');
  const [total, setTotal] = useState(200); // Initial total before discount
  const [discount, setDiscount] = useState(25); // Initial discount

  const subTotal = useMemo(() => {
    return data.reduce((sum, item) => sum + (item.price || 0)*item.quantity, 0);
  }, [data]);

  const checkoutProduct = ()=>{
    navigation.navigate("dashboard", { screen: "Home" });
    new AndroidToaster().showToastWithGravityAndOffset("Order Placed Successfully");
  }

  const applyDiscount = () => {
    // Simulating discount application
    if (discountCode === 'DISCOUNT25') {
      setTotal(175); // Applying discount
    }
  };

  return (
    <View style={styles.container}>
      {/* Discount Code Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Discount Code"
          value={discountCode}
          onChangeText={setDiscountCode}
        />

        <Button title="Apply" onPress={applyDiscount} style={styles.button} />
      </View>
      {/* Subtotal Section */}
      <ListItem bottomDivider>
        <ListItem.Content>
          <View style={styles.row}>
            <ListItem.Subtitle>Subtotal:</ListItem.Subtitle>
            <ListItem.Title>-${subTotal}</ListItem.Title>
          </View>
          <View style={styles.row}>
            <ListItem.Subtitle>Discount:</ListItem.Subtitle>
            <ListItem.Title>-${discount}</ListItem.Title>
          </View>
        </ListItem.Content>
      </ListItem>

      {/* Total Section */}
      <ListItem bottomDivider>
        <ListItem.Content>
          <View style={styles.row}>
            <ListItem.Subtitle>Total:</ListItem.Subtitle>
            <ListItem.Title>-${subTotal-discount}</ListItem.Title>
          </View>
        </ListItem.Content>
      </ListItem>

      {/* Checkout Button */}
      <Button title="Checkout" color="#FF7F32" onPress={checkoutProduct} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 20,
  },
  row: {
    flexDirection: 'row', // Items in a row
    justifyContent: 'space-between', // Distribute items to opposite ends
    width: '100%', // Make sure the row takes up the full width
  },
  inputContainer: {
    flexDirection: 'row', // Align the input and button in a row
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 30,
    overflow: 'hidden', // Makes sure the button stays within the input field
  },
  input: {
    flex: 1,
    height: 40,
    paddingLeft: 10,
    fontSize: 16,
  },
  button: {
    width: 80, // Fixed width for the button
    backgroundColor: '#FF7F32',
  },
});

export default CheckoutScreen;
