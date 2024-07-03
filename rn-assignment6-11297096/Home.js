import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, Image, StyleSheet, ScrollView, Dimensions, ImageBackground } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const { width } = Dimensions.get('window');

  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const dresses = [
    { id: 1, image: require('./images/dress1.png'), category: 'Office Wear', name: 'Reversible Angora Cardigan', price: 120 },
    { id: 2, image: require('./images/dress2.png'), category: 'Black', name: 'Reversible Angora Cardigan', price: 120 },
    { id: 3, image: require('./images/dress3.png'), category: 'Church Wear', name: 'Reversible Angora Cardigan', price: 120 },
    { id: 4, image: require('./images/dress4.png'), category: 'Lamerei', name: 'Reversible Angora Cardigan', price: 120 },
    { id: 5, image: require('./images/dress5.png'), category: '21WN', name: 'Reversible Angora Cardigan', price: 120 },
    { id: 6, image: require('./images/dress6.png'), category: 'Lopo', name: 'Reversible Angora Cardigan', price: 120 },
    { id: 7, image: require('./images/dress7.png'), category: '21WN', name: 'Reversible Angora Cardigan', price: 120 },
    { id: 3, image: require('./images/dress3.png'), category: 'Church Wear', name: 'Reversible Angora Cardigan', price: 120 },
  ];

  const itemWidth = (width - 20) / 2 - 10;

  const addToCart = (dress) => {
    const updatedCart = [...cartItems, dress];
    const updatedPrice = totalPrice + dress.price;
    setCartItems(updatedCart);
    setTotalPrice(updatedPrice);
  };

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <Image source={require('./images/Logo.png')} style={styles.logo} />
      <Image source={require('./images/Menu.png')} style={styles.menuIcon} />
      <Image source={require('./images/Search.png')} style={styles.searchIcon} />
      <Image source={require('./images/shoppingBag.png')} style={styles.shoppingBagIcon} />
      <Text style={styles.title}>OUR STORY</Text>
      <Image source={require('./images/tr.png')} style={styles.trIcon} />
      <View style={{ height: '80vh', width: '100vw' }}>
        <ScrollView contentContainerStyle={styles.scrollViewContent} showsVerticalScrollIndicator={false}>
          {dresses.map((dress, index) => (
            <View key={index} style={[styles.dressContainer, { width: itemWidth }]}>
              <Image source={dress.image} style={styles.dressImage} />
              <Text style={styles.dressCategory}>{dress.category}</Text>
              <Text style={styles.dressName}>{dress.name}</Text>
              <Text style={styles.dressPrice}>${dress.price}</Text>
              <TouchableOpacity onPress={() => addToCart(dress)}>
                <ImageBackground source={require('./images/add_circle.png')} style={styles.addToCartButton}>
                </ImageBackground>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={{  marginTop: '-0.7rem' }}>
        <Button title="View Cart" onPress={() => navigation.navigate('Cart', { cartItems, totalPrice })}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 33,
    width: 83,
    alignSelf: 'center',
    marginTop: 20,
  },
  menuIcon: {
    height: 20,
    width: 20,
    position: 'absolute',
    left: 10,
    top: 20,
  },
  searchIcon: {
    height: 20,
    width: 20,
    position: 'absolute',
    right: 50,
    top: 20,
  },
  shoppingBagIcon: {
    height: 20,
    width: 20,
    position: 'absolute',
    right: 10,
    top: 20,
  },
  trIcon: {
    height: 60,
    width: 85,
    marginLeft: '75vw',
    marginTop: '-3rem',
  },
  title: {
    fontSize: 18,
    fontWeight: '400',
    alignSelf: 'center',
    marginTop: 40,
    marginLeft: '-15rem',
  },
  scrollViewContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  dressContainer: {
    marginBottom: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
  },
  dressImage: {
    height: 180,
    width: '100%',
    marginBottom: 10,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  dressCategory: {
    textAlign: 'center',
    marginTop: 5,
    fontWeight: 'bold',
  },
  dressName: {
    textAlign: 'center',
    fontSize: 14,
    marginBottom: 5,
  },
  dressPrice: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  addToCartButton: {
    width: '2rem',
    height: '2rem',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '5rem',
    marginTop: '-8.5rem',
  },
});

export default HomeScreen;

