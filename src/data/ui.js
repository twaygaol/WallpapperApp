import { View, Text, ScrollView, Image, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { BellIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import Categories from '../components/categories';
import axios from 'axios';
import Recipes from '../components/recipes';
import catalogData from '../data/catalogData'; // Import data from catalogData.js

export default function HomeScreen() {

  const [activeCategory, setActiveCategory] = useState('Beef');
  const [categories, setCategories] = useState([]);
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getCategories();
    getRecipes();
  }, [])

  const handleChangeCategory = category => {
    getRecipes(category);
    setActiveCategory(category);
    setMeals([]);
  }

  const getCategories = async () => {
    try {

      const response = await axios.get('https://themealdb.com/api/json/v1/1/categories.php');
      // console.log('got categories: ',response.data);
      if (response && response.data) {
        setCategories(response.data.categories);
      }
    } catch (err) {
      console.log('error: ', err.message);
    }
  }
  const getRecipes = async (category = "Beef") => {
    try {
      const response = await axios.get(`https://themealdb.com/api/json/v1/1/filter.php?c=${category}`);
      // console.log('got recipes: ',response.data);
      if (response && response.data) {
        setMeals(response.data.meals);
      }
    } catch (err) {
      console.log('error: ', err.message);
    }
  }
  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
        className="space-y-6 pt-14"
      >
        {/* greetings and punchline */}
        <View className="mx-4 space-y-2 mb-2">
          {/* <Text style={{fontSize: hp(1.7)}} className="text-neutral-600">Hai,.. 👋</Text> */}
          <View>
            <Text style={{ fontSize: hp(3.8) }} className="font-semibold text-neutral-600">Selamat Datang </Text>
            <Text style={{ fontSize: hp(3.8) }} className="font-semibold text-neutral-600">Di Catalog </Text>
            <Text style={{ fontSize: hp(3.8) }} className="font-semibold text-neutral-600">The Bites
             <Text className="font-semibold text-amber-400"> Brownies</Text>
            </Text>
          </View>
        </View>

        {/* Display catalog data */}
        <View style={{ paddingHorizontal: wp(4) }}>
          <Text style={{ fontSize: hp(2), fontWeight: '600', color: '#374151', marginBottom: hp(1) }}>Catalog Data</Text>
          <View>
            {
              catalogData.map((item, index) => (
                <View key={index} style={{ marginBottom: hp(2) }}>
                  <Text style={{ fontSize: hp(2), fontWeight: '600', color: '#374151' }}>{item.title}</Text>
                  <Image source={item.imgUrl} style={{ width: wp(90), height: hp(30), borderRadius: 10, marginTop: hp(1) }} />
                  <Text style={{ fontSize: hp(1.5), marginTop: hp(1), color: '#6B7280' }}>{item.description}</Text>
                </View>
              ))
            }
          </View>
        </View>

      </ScrollView>
    </View>
  )
}
