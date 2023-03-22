import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { uColors } from '../constant/Colors';
import { useNavigation } from '@react-navigation/native';

export default function RestaurantCard({
    id, imgUrl, title, rating, genre, address, short_description, dishes, long, lat
}) {

    const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('restaurant',{
        id, imgUrl, title, rating, genre, address, short_description, dishes, long, lat
    })} className="mr-3 shadow bg-white" >
      <Image source={{ uri:imgUrl }} className="h-36 w-64 rounded-md" />
      <View className="px-2 pb-2" >
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row space-x-1 items-center" >
            <AntDesign name="star" size={22} opacity={0.5} color={uColors.primary} />
            <Text className="text-gray-500 text-xs"><Text className="text-green-500 text-xs" >{rating}</Text> . {genre}</Text>
        </View>

        <View className="flex-row items-center space-x-2 mt-2">
            <FontAwesome name="location-arrow" size={16} color="black" />
            <Text className="text-gray-500 text-xs" >Nearby . {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}