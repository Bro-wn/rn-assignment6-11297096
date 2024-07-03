import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';

const CartScreen = ({ route }) => {
  const { cartItems: initialCartItems, totalPrice: initialTotalPrice } = route.params;
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [totalPrice, setTotalPrice] = useState(initialTotalPrice);

  const removeFromCart = (itemToRemove) => {
    const updatedCart = cartItems.filter(item => item.id !== itemToRemove.id);
    const updatedPrice = totalPrice - itemToRemove.price;
    setCartItems(updatedCart);
    setTotalPrice(updatedPrice);
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white', paddingHorizontal: 10 }}>
      <Text style={styles.title}>Shopping Cart</Text>
      <ScrollView>
        {cartItems.map((item, index) => (
          <View key={index} style={styles.cartItemContainer}>
            <Image source={item.image} style={styles.cartItemImage} />
            <View style={styles.cartItemTextContainer}>
              <Text style={styles.cartItemCategory}>{item.category}</Text>
              <Text style={styles.cartItemName}>{item.name}</Text>
              <Text style={styles.cartItemPrice}>${item.price}</Text>
            </View>
            <TouchableOpacity onPress={() => removeFromCart(item)}>
              <ImageBackground source={require('./images/remove.png')} style={styles.removeButton}>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <View style={{ marginTop: 20 }}>
        <Text style={styles.totalPrice}>Total: ${totalPrice}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 20,
  },
  cartItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 10,
  },
  cartItemImage: {
    width: 80,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  cartItemTextContainer: {
    marginLeft: 10,
    flex: 1,
  },
  cartItemCategory: {
    fontWeight: 'bold',
  },
  cartItemName: {
    fontSize: 16,
    marginTop: 5,
  },
  cartItemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  removeButton: {
    width: '2rem',
    height: '2rem',
    justifyContent: 'center',
    alignItems: 'center',
  },
  totalPrice: {
    alignSelf: 'flex-end',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CartScreen;
