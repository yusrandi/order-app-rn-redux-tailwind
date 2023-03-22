import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selecBasketItems, selectBasketTotal } from '../redux/slices/basketSlice'
import { useNavigation } from '@react-navigation/native';
import { uColors } from '../constant/Colors';


export default function BasketIcon() {
    const items = useSelector(selecBasketItems);
    const basketTotal = useSelector(selectBasketTotal);
    const navigation = useNavigation();

    if (items.length === 0) return null;
  return (
    <View className="absolute bottom-10 w-full z-50" >
        <TouchableOpacity  onPress={() => navigation.navigate('basket')} className={`flex-row mx-5 p-4 rounded-lg items-center space-x-1 bg-[#00CCBB]`}>
            <Text className="text-white font-extrabold text-lg bg-[#01A296] px-2" >{items.length}</Text>
            <Text className="flex-1 text-center text-white font-bold text-lg">View Basket</Text>
            <Text className="text-center text-white font-bold text-lg">{basketTotal}K</Text>
        </TouchableOpacity>
    </View>
  )
}