import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { uColors } from '../constant/Colors';
import { AntDesign, FontAwesome, Entypo } from '@expo/vector-icons';
import DishRow from '../components/DishRow';
import BasketIcon from '../components/BasketIcon';
import { useSelector, useDispatch } from 'react-redux'
import { setRestaurant } from '../redux/slices/restaurantSlice';


export default function RestaurantScreen() {
    const dispatch = useDispatch();
    const {params: {
        id, imgUrl, title, rating, genre, address, short_description, dishes, long, lat
    }, } = useRoute();
    
    useEffect(()=> {
        dispatch(setRestaurant({id, imgUrl, title, rating, genre, address, short_description, dishes, long, lat}));        
    }, []);

    const navigation = useNavigation();

  return (
    <>
    <BasketIcon/>
      <ScrollView>
        <View className="relative">
            <Image source={{ uri: imgUrl }} className="w-full h-56 bg-gray-300 p-4" />
        </View>
        <TouchableOpacity onPress={() => navigation.goBack()} className="absolute top-10 left-5 bg-gray-100 p-2 rounded-full">
            <AntDesign name="arrowleft" size={20} color={uColors.primary} />
        </TouchableOpacity>
        

        <View className="bg-white px-4 py-4">
            <View className="">
                <Text className="text-xl font-bold" >{title}</Text>
            </View>
        
            <View className="flex-row items-center space-x-2 mt-2">
                <View className="flex-row space-x-1 items-center" >
                    <AntDesign name="star" size={16} opacity={0.5} color={uColors.primary} />
                    <Text className="text-gray-500 text-xs"><Text className="text-green-500 text-xs" >{rating}</Text> . {genre}</Text>
                </View>
                <FontAwesome name="location-arrow" size={16} color="black" />
                <Text className="text-gray-500 text-xs" >Nearby . {address}</Text>
            </View>

            <Text className="text-xs text-gray-500 mt-2" >{short_description}</Text>

            <TouchableOpacity className="flex-row mt-4 space-x-2 items-center border-t border-gray-300 pt-3">
                <AntDesign name="questioncircleo" size={20} color="gray" />
                <Text className="flex-1 font-bold text-sm">Have a food alergy ?</Text>
                <Entypo name="chevron-right" size={24} color={uColors.primary} />
            </TouchableOpacity>
        </View>

        <View className="pb-36">
            <Text className="font-bold text-lg p-3" >Menu</Text>
            <View className="bg-white">
                {
                    dishes.map((dish) => <DishRow key={dish.id} id={dish.id}  name={dish.name} description={dish.description} price={dish.price} imgUrl={dish.imgUrl}/>)
                }
            </View>
        </View>
      </ScrollView>

      </>
  )
}