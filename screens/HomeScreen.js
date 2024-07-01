import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({ navigation }) => {
  const addToCart = async (item) => {
    try {
      const jsonValue = JSON.stringify(item);
      await AsyncStorage.setItem(`@cart_${item.id}`, jsonValue);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Image source={require('../assets/Menu.png')} />
        <Image source={require('../assets/Logo.png')} />
        <View style={styles.inner}>
          <Image source={require('../assets/Search.png')} />
          <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
            <Image source={require('../assets/shoppingBag.png')} style={styles.shopcart} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.story}>
        <Text style={styles.header}>OUR STORY</Text>
        <View style={styles.filter}>
          <Image source={require('../assets/Listview.png')} />
          <Image source={require('../assets/Filter.png')} style={styles.filt} />
        </View>
      </View>
      <ScrollView style={styles.productContainer}>
        <View>
          <View style={styles.dress}>
            <View>
              <View>
                <Image source={require('../assets/dress1.png')} style={styles.fashion} />
                <TouchableOpacity style={styles.addButton} onPress={() => addToCart({ id: 1, name: 'Dress 1', price: '$120', image: 'https://via.placeholder.com/200' })}>
                  <Image source={require('../assets/add_circle.png')} style={styles.addIcon} />
                </TouchableOpacity>
              </View>
              <Text>Office Wear</Text>
              <Text style={styles.cardigan}>reversible angora cardigan</Text>
            </View>
            <View>
              <View>
                <Image source={require('../assets/dress2.png')} style={styles.fashion} />
                <TouchableOpacity style={styles.addButton} onPress={() => addToCart({ id: 2, name: 'Dress 2', price: '$120', image: 'https://via.placeholder.com/200' })}>
                  <Image source={require('../assets/add_circle.png')} style={styles.addIcon} />
                </TouchableOpacity>
              </View>
              <Text>Black</Text>
              <Text style={styles.cardigan}>reversible angora cardigan</Text>
            </View>
          </View>
          <View style={styles.fits}>
            <View>
              <View>
                <Image source={require('../assets/dress3.png')} style={styles.fashion} />
                <TouchableOpacity style={styles.addButton} onPress={() => addToCart({ id: 3, name: 'Dress 3', price: '$120', image: 'https://via.placeholder.com/200' })}>
                  <Image source={require('../assets/add_circle.png')} style={styles.addIcon} />
                </TouchableOpacity>
              </View>
              <Text>Church wear</Text>
              <Text style={styles.cardigan}>reversible angora cardigan</Text>
            </View>
            <View>
              <View>
                <Image source={require('../assets/dress4.png')} style={styles.fashion} />
                <TouchableOpacity style={styles.addButton} onPress={() => addToCart({ id: 4, name: 'Dress 4', price: '$120', image: 'https://via.placeholder.com/200' })}>
                  <Image source={require('../assets/add_circle.png')} style={styles.addIcon} />
                </TouchableOpacity>
              </View>
              <Text>Lamerei</Text>
              <Text style={styles.cardigan}>reversible angora cardigan</Text>
            </View>
          </View>
          <View style={styles.fits}>
            <View>
              <View>
                <Image source={require('../assets/dress5.png')} style={styles.fashion} />
                <TouchableOpacity style={styles.addButton} onPress={() => addToCart({ id: 5, name: 'Dress 5', price: '$120', image: 'https://via.placeholder.com/200' })}>
                  <Image source={require('../assets/add_circle.png')} style={styles.addIcon} />
                </TouchableOpacity>
              </View>
              <Text>21WN</Text>
              <Text style={styles.cardigan}>reversible angora cardigan</Text>
            </View>
            <View>
              <View>
                <Image source={require('../assets/dress6.png')} style={styles.fashion} />
                <TouchableOpacity style={styles.addButton} onPress={() => addToCart({ id: 6, name: 'Dress 6', price: '$120', image: 'https://via.placeholder.com/200' })}>
                  <Image source={require('../assets/add_circle.png')} style={styles.addIcon} />
                </TouchableOpacity>
              </View>
              <Text>Lopo</Text>
              <Text style={styles.cardigan}>reversible angora cardigan</Text>
            </View>
          </View>
          <View style={styles.fits}>
            <View>
              <View>
                <Image source={require('../assets/dress7.png')} style={styles.fashion} />
                <TouchableOpacity style={styles.addButton} onPress={() => addToCart({ id: 7, name: 'Dress 7', price: '$120', image: 'https://via.placeholder.com/200' })}>
                  <Image source={require('../assets/add_circle.png')} style={styles.addIcon} />
                </TouchableOpacity>
              </View>
              <Text>21WN</Text>
              <Text style={styles.cardigan}>reversible angora cardigan</Text>
            </View>
            <View>
              <View>
                <Image source={require('../assets/dress3.png')} style={styles.fashion} />
                <TouchableOpacity style={styles.addButton} onPress={() => addToCart({ id: 8, name: 'Dress 8', price: '$120', image: 'https://via.placeholder.com/200' })}>
                  <Image source={require('../assets/add_circle.png')} style={styles.addIcon} />
                </TouchableOpacity>
              </View>
              <Text>lame</Text>
              <Text style={styles.cardigan}>reversible angora cardigan</Text>
            </View>
          </View>
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
  head: {
    flexDirection: 'row',
    marginTop: 70,
    justifyContent: 'space-around',
  },
  inner: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  shopcart: {
    marginLeft: 20,
  },
  story: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  filter: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  filt: {
    marginLeft: 20,
  },
  productContainer: {
    padding: 15,
    marginBottom: 30,
  },
  dress: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  fashion: {
    width: 150,
  },
  addButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    borderRadius: 12,
    padding: 4,
  },
  addIcon: {
    width: 24,
    height: 24,
  },
  fits: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  cardigan: {
    fontSize: 10,
  },
});

export default HomeScreen;
