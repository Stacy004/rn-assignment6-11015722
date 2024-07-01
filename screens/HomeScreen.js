import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

const HomeScreen = ({ navigation }) => {
  const addToCart = async (item) => {
    try {
      const jsonValue = JSON.stringify(item);
      await AsyncStorage.setItem(`@cart_${item.id}`, jsonValue);
    } catch (e) {
     
      console.error(e);
    }
  };

  // const products = [
  //   { id: 1, name: "Office Wear", price: "$120", description: "reversible angora cardigan", image: "https://via.placeholder.com/200" },
  //   { id: 2, name: "Black", price: "$120", description: "reversible angora cardigan", image: "https://via.placeholder.com/200" },
  //   { id: 3, name: "Church Wear", price: "$120", description: "reversible angora cardigan", image: "https://via.placeholder.com/200" },
  //   { id: 4, name: "Lamerei", price: "$120", description: "reversible angora cardigan", image: "https://via.placeholder.com/200" },
  //   { id: 5, name: "21WN", price: "$120", description: "reversible angora cardigan", image: "https://via.placeholder.com/200" },
  //   { id: 6, name: "Lopo", price: "$120", description: "reversible angora cardigan", image: "https://via.placeholder.com/200" }
  // ];

  // const renderItem = ({ item }) => (
  //   <View style={styles.productCard}>
  //     <View style={styles.imageContainer}>
  //       <Image source={{ uri: item.image }} style={styles.productImage} />
  //       <TouchableOpacity style={styles.addButton} onPress={() => addToCart(item)}>
  //         <MaterialIcons name="add-shopping-cart" size={24} color="white" />
  //       </TouchableOpacity>
  //     </View>
  //     <Text style={styles.productName}>{item.name}</Text>
  //     <Text style={styles.productDescription}>{item.description}</Text>
  //     <Text style={styles.productPrice}>{item.price}</Text>
  //   </View>
  // );

  return (
    <View style={styles.container}>
      <View style={styles.head}>
      <Image source={require('../assets/Menu.png')} />
      <Image source={require('../assets/Logo.png')} />
      <View style={styles.inner}>
      <Image source={require('../assets/Search.png')} />
      <Image source={require('../assets/shoppingBag.png')} style={styles.shopcart}/>

      </View>
      

      </View>
      <View style={styles.story}>
       <Text style={styles.header}>OUR STORY</Text>
       <View style={styles.filter}>
          <Image source={require('../assets/Listview.png')} />
          <Image source={require('../assets/Filter.png') }  style={styles.filt} />

      </View>
      
      </View>
      
     <ScrollView>
      <View style={styles.products}>

      </View>
     </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
  },
  row: {
    justifyContent: 'space-between',
  },
  productCard: {
    flex: 1,
    margin: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    overflow: 'hidden',
  },
  imageContainer: {
    position: 'relative',
  },
  productImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  addButton: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 20,
    padding: 5,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  productDescription: {
    color: '#666',
    paddingHorizontal: 10,
  },
  productPrice: {
    color: 'red',
    fontWeight: 'bold',
    marginVertical: 5,
    paddingHorizontal: 10,
  },
  head:{
    flexDirection: 'row',
    marginTop: 70,
    
    justifyContent: 'space-around',

  },
  inner:{
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  shopcart:{
    marginLeft: 20,
  },
  story:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  filter:{
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  filt:{
    marginLeft: 20,
  }
});

export default HomeScreen;
