import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { imagePaths } from './imagePaths'; // Import imagePaths

const CartScreen = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const keys = await AsyncStorage.getAllKeys();
        const items = await AsyncStorage.multiGet(keys);
        const cartItems = items
          .filter(item => item[0].startsWith('@cart_'))
          .map(item => JSON.parse(item[1]));
        setCartItems(cartItems);
      } catch (e) {
        console.error(e);
      }
    };

    fetchCartItems();
  }, []);

  const removeFromCart = async (id) => {
    try {
      await AsyncStorage.removeItem(`@cart_${id}`);
      setCartItems(cartItems.filter(item => item.id !== id));
    } catch (e) {
      console.error(e);
    }
  };

  return (
   
    <ScrollView style={styles.container}>
       <View style={styles.iconSearch}>
       <Image source={require('../assets/Logo.png')} style={styles.addIcon} />
       <Image source={require('../assets/Search.png')} style={styles.searchIcon} />
       </View>
       <View>
       <Image source={require('../assets/checkout.png')} style={styles.checkout} />
       </View>
      {cartItems.map(item => (
        <View key={item.id} style={styles.item}>
          <Image source={imagePaths[item.imageKey]} style={styles.image} />
          <View style={styles.itemDetails}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
          <TouchableOpacity onPress={() => removeFromCart(item.id)} style={styles.removeButton}>
          <Image source={require('../assets/remove.png')} style={styles.addIcon} />
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  item: {
    flexDirection: 'row',
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 8,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 150,
    marginRight: 16,
  },
  itemDetails: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
  price: {
    fontSize: 16,
    color: '#000',
  },
  removeButton: {
    marginLeft: 16,
    marginTop: 100,
  },
  removeButtonText: {
    fontSize: 18,
    color: 'red',
  },
  iconSearch:{
    flexDirection:'row',
    justifyContent: 'space-around',
    marginLeft: 100,
    marginTop: 40,
  },
  searchIcon:{
    marginLeft: 70,
  },
  checkout:{
    height:70,
    width: 170, 
    marginLeft:70,
    
  }
});

export default CartScreen;
