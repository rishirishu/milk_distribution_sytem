import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { ListItem } from '@rneui/base';
import { CustomButtons } from '../../components/buttons';

const CartItem = ({data,onDelete,onIncrease,onDecrease}) => {
  return (
    <View style={styles.container}>
      {/* FRONT SWIPEABLE CARD */}
      <ListItem.Swipeable
        containerStyle={styles.swipeable}
        rightContent={() => 
         <CustomButtons
          text="Delete"
          onPressFunction={() => onDelete(data.id)}
          color="red"
          IconName={{ name: 'delete', color: 'white' }}
          buttonStyle = {{ minHeight:"73%", borderRadius: 20, paddingHorizontal: 10, paddingVertical: 8 , marginTop: 18,}}
        />
        } // we don’t use this anymore
      >
        <View style={styles.card}>
          {/* Product Image */}
          <Image
            style={styles.image}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />

          {/* Product Details */}
          <View style={styles.details}>
            <Text style={styles.title}>{data.name}</Text>
            <Text style={styles.size}>{data.size}</Text>
            <Text style={styles.price}>{data.price}</Text>
          </View>

          {/* Quantity Box */}
          <View style={styles.qtyBox}>
            <TouchableOpacity 
            style={styles.qtyButton}
            onPress={() => onDecrease(data.id)}
            >
              <Text style={styles.qtyText}>–</Text>
            </TouchableOpacity>

            <Text style={styles.qtyNumber}>{data.quantity}</Text>

            <TouchableOpacity 
            style={[styles.qtyButton, styles.plusButton]}
            onPress={() => onIncrease(data.id)}
            >
              <Text style={[styles.qtyText, { color: '#fff' }]}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ListItem.Swipeable>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    // position: 'relative',
    marginVertical: -10,
  },
  swipeable: {
    backgroundColor: 'transparent',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 14,
    width: '100%',              // ✅ full width
    alignSelf: 'stretch',       // ✅ stretch to parent width
    marginHorizontal: 0,   
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 16,
    marginRight: 12,
  },
  details: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
  },
  size: {
    color: '#777',
    marginVertical: 3,
  },
  price: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000',
  },
  qtyBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
    borderRadius: 14,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  qtyButton: {
    width: 26,
    height: 26,
    borderRadius: 8,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.8,
    borderColor: '#ddd',
  },
  plusButton: {
    backgroundColor: '#FF7A00',
    borderColor: '#FF7A00',
  },
  qtyText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  qtyNumber: {
    fontSize: 16,
    fontWeight: '600',
    marginHorizontal: 8,
  },
});

