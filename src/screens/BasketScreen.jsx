import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React, { useMemo, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { selectRestaurant } from '../redux/slices/restaurantSlice';
import { removeFromBasket, selecBasketItems, selectBasketTotal } from '../redux/slices/basketSlice';
import { AntDesign } from '@expo/vector-icons';
import { uColors } from '../constant/Colors';
import { ScrollView } from 'react-native';


export default function BasketScreen() {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);
    const basketTotal = useSelector(selectBasketTotal);
    const items = useSelector(selecBasketItems);
    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
    const dispatch = useDispatch();

    useMemo(()=> {
        const groupedItems = items.reduce((results, item) => {
            (results[item.id] = results[item.id] || []).push(item);

            return results;
        }, {});

        setGroupedItemsInBasket(groupedItems);
    }, [items]);

    console.log(groupedItemsInBasket);
    console.log(`restaurant ${restaurant}`);
  return (
    <SafeAreaView className="flex-1 bg-white">
        <View className="flex-1 bg-gray-100">
            <View className="flex-row items-center p-3 bg-white border border-[#00CCBB] shadow-sm">
                <View className="flex-1 text-center items-center">
                    <Text className="font-bold text-lg">Keranjang</Text>
                    <Text className="text-xs text-gray-500" >{restaurant.title}</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesign name="closecircle" size={32} color={uColors.primary} />
                </TouchableOpacity>
            </View>

            <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
                <Image source={{ uri: 'https://links.papareact.com/wru' }} className="w-7 h-7 rounded-full bg-gray-300 p-4" />
                <Text className="flex-1" >Deliver in 50-75 min</Text>
                <TouchableOpacity>
                    <Text className="text-[#00CCBB]" >Change</Text>
                </TouchableOpacity>
            </View>

            <ScrollView  className="divide-y divide-gray-200">
                {
                    Object.entries(groupedItemsInBasket).map(([key, items]) => (
                        <View key={key} className="flex-row items-center space-x-3 bg-white py-2 px-5" >
                            <Text className="text-[#00CCBB]">{items.length} x</Text>
                            <Image source={{ uri: items[0]?.imgUrl }} className="w-12 h-12 rounded-full" />
                            <Text className="flex-1" >{items[0]?.name}</Text>
                            <Text className="text-gray-600" >{items[0]?.price} K</Text>
                            <TouchableOpacity onPress={() => dispatch(removeFromBasket({id: items[0]?.id}))}  >
                                <Text className="text-[#00CCBB] text-xs" >Remove</Text>
                            </TouchableOpacity>

                        </View>
                    ))
                }
            </ScrollView>

            <View className="p-5 bg-white mt-5 space-y-4">
                <View className="flex-row justify-between"> 
                    <Text className="text-gray-400 text-xs">Subtotal</Text>
                    <Text className="text-gray-400 text-xs">{basketTotal} K</Text>
                </View>
                <View className="flex-row justify-between"> 
                    <Text className="text-gray-400 text-xs">Delivery fee</Text>
                    <Text className="text-gray-400 text-xs">0 K</Text>
                </View>
                <View className="flex-row justify-between"> 
                    <Text className="">Delivery fee</Text>
                    <Text className="font-extrabold">IDR {basketTotal} K</Text>
                </View>

                <TouchableOpacity onPress={() => navigation.navigate('preparing')} className="bg-[#00CCBB] rounded-lg p-4">
                    <Text className="text-white text-center text-md font-bold">Place Order</Text>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  )
}