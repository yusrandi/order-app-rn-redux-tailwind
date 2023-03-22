import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import { FeaturesApi } from '../api/FeaturesApi';

function Header() {
    return (
        <View className="flex-row pb-3 items-center mx-2 space-x-2">
            <View>
                <Image source={{ uri: 'https://links.papareact.com/wru' }} className="w-7 h-7 rounded-full bg-gray-300 p-4" />
            </View>

            <View className="flex-1">
                <Text className="text-gray-400 font-bold text-xs" >Nurul Hakiki</Text>
                <Text className="text-lg font-bold" >Di Pulau Sebrang</Text>
            </View>

            <View>
                <FontAwesome name="user-circle-o" size={24} color="black" />
            </View>
        
        </View>
    )
}

function Search() {
    return (
        <View className="flex-row items-center space-x-2 pb-2 mx-2">
            <View className="flex-row space-x-2 bg-gray-200 p-2 flex-1 rounded-lg">
                <View className="flex-1 flex-row space-x-2">
                    <AntDesign name="search1" size={24} color="gray" />
                    <TextInput placeholder='Restaurants and cuisines' keyboardType='default' />
                </View>
            </View>
                <AntDesign name="setting" size={24} color="black" />
        </View>
    )
}

function Body({items}) {

    return(
        <ScrollView>
            <Categories/>
            <FeaturedRow items={items.slice(0,3)} id="1" title="Featured" description="Paid places from our partner" featuredCategory="featured"/>
            <FeaturedRow items={items.slice(3,6)} id="2" title="Tasty Discount" description="Everyone's been enjoying these juicy discounts" featuredCategory="discounts"/>
            <FeaturedRow items={items.slice(6,9)} id="3" title="Offers Near You" description="Why not support your restaurant local tonight!" featuredCategory="offers"/>
        </ScrollView>
    )
}

export default function HomeScreen() {
    const [features, setFeatures] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        FeaturesApi().then((result) => {
          console.log(`features result ${result.data}`);
          setFeatures(result.data);
          console.log(`features ${features.length}`);
    
        }).catch(err =>{
          console.log(`features error ${err}`);
        })
      }

  return (
    <SafeAreaView className="pt-5 bg-white">
        <Header/>
        <Search/>
        <Body items={features}/>
    </SafeAreaView>
  )
}