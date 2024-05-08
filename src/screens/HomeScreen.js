import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TextInput,TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ArchiveBoxXMarkIcon, AtSymbolIcon, BellIcon, HomeIcon, MagnifyingGlassIcon, SparklesIcon, ViewColumnsIcon } from 'react-native-heroicons/outline';
import Colors from '../data/colors';
import { FontAwesome } from '@expo/vector-icons';
import Categories from '../components/categories';
import axios from 'axios';
import Header from '../components/header';
import Recipes from '../components/recipes';
import Slider from '../components/categories';

export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState('Beef');
  const [categories, setCategories] = useState([]);
  const [meals, setMeals] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  
    const toggleDropdown = () => {
      setShowDropdown(!showDropdown);
    };

  return (
    <View style={{
      height: '100%',
      position: 'relative'
    }}>
      <StatusBar style="dark" />
      {/* Avatar and bell icon */}
      <View style={{
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        height: 150,
        backgroundColor: '#1B3D90',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 2,
      }}>
        <View style={{ position: 'relative', flexDirection: 'row', alignItems: 'center',marginTop:50, paddingHorizontal:20,paddingVertical:10}}>
          <Image source={require('../../assets/images/ogo.png')} style={{ width: 55, height: 55, marginBottom: 2, borderRadius: 10, overflow: 'hidden', borderWidth: 0.5, borderColor: '#ffff' }} />
          <View style={{ flex: 1, flexDirection: 'column', marginLeft: 10 }}>
            <Text style={{ fontSize: hp(3.0), fontWeight: 'bold', color: 'white' }}>MANAGEMEN</Text>
            <Text style={{ fontSize: hp(2.0), fontWeight: 'bold', color: 'white' }}>PT Seraya Startup Nusantara</Text>
          </View>
          <TouchableOpacity onPress={toggleDropdown}>
            <HomeIcon size={hp(5)} color="white" />
          </TouchableOpacity>
        </View>

        {/* Menu search */}
        {/* <View style={styles.searchBarContainer}>
          <TextInput placeholder='Search'
            style={styles.textInput} />
          <FontAwesome name="search"
            style={styles.searchbtn}
            size={24} color={Colors.SERAYA} />
        </View> */}
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
        style={{ paddingTop: 6 }}
      >
        {/* Slider  */}
        {/* <Slider /> */}
        {/* Menu Brownis */}
        <View style={{ marginTop: 14 }}>
          <Recipes meals={meals} categories={categories} />
        </View>
      </ScrollView>
      {showDropdown && (
          <View style={{ position: 'absolute', top: 60, left:20, backgroundColor: '#51829B',padding:30,maxWidth: hp('50%'), borderRadius: 10, marginTop:100, zIndex: 999 }}>
            {/* Isi dropdown dengan informasi perusahaan */}
            <Text style={{ color: 'white',fontSize:22, textAlign: 'center', textDecorationLine: 'underline', marginBottom: 10 }}>Profil Perusahaan</Text>
            <Text style={{color:'white'}}>PT. SERAYA STARTUP NUSANTARA</Text>
            <Text style={{color:'white'}}>NIB : 2206230053281</Text>
            <Text style={{color:'white'}}>NPWP : 39.224.206.1-113.000</Text>
            <Text style={{color:'white', marginBottom:10}}>REKENING MANDIRI : 105.00-6000869-9</Text> 
            <Text style={{ color: 'white', marginBottom:15 }}>PT Seraya Startup Nusantara (PT SSN) adalah perusahaan yang berdedikasi dalam menyediakan solusi teknologi yang diakui secara luas dan sangat dihormati di Indonesia.
            </Text>
            <Text style={{ color:'white'}}>
            Jl. Kutilang No. 10B, Medan Sunggal, Medan
            </Text>
            <Text style={{color:'white'}}>
            cs@seraya.co.id (+62)811600086
            </Text>
            {/* Tambahkan informasi lainnya sesuai kebutuhan */}
          </View>         
          )}
      {/* <Header style={styles.header} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    padding: 7,
    paddingHorizontal: 16,
    backgroundColor: Colors.WHITE,
    borderRadius: 8,
    width: '75%',
    fontSize: 16,
  },
  searchBarContainer: {
    marginTop: 7,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#1B3D90',
    borderRadius: 8,
    marginBottom: 10
  },
  searchbtn: {
    backgroundColor: Colors.WHITE,
    padding: 10,
    borderRadius: 8
  },
  header: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  }
});
