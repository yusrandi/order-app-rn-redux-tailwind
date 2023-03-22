import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { uColors } from '../constant/Colors';
import { useSelector, useDispatch } from 'react-redux'
import { addToBasket, removeFromBasket, selecBasketItems, selecBasketItemsWithId } from '../redux/slices/basketSlice';

export default function DishRow({id, name, description,price,imgUrl}) {
    const [isPressed, setIspressed] = useState(false);
    const items = useSelector((state) => selecBasketItemsWithId(state, id));
    const dispatch = useDispatch();

    const addItemToBasket = () => {
        dispatch(addToBasket({id, name, description,price,imgUrl}));
    }
    const removeItemFromBasket = () => {
        if (!items.length > 0) return;
        dispatch(removeFromBasket({id}));
    }

  return (
    <>
        <TouchableOpacity onPress={() => setIspressed(!isPressed)} className={`px-2 py-2 border border-gray-200 ${isPressed && "border-b-0"}`}>
            <View className="flex-row items-center">
                <View className="flex-1 pr-2">
                    <Text className="text-lg mb-1" >{name}</Text>
                    <Text className="text-xs text-gray-400" >{description}</Text>
                    <Text className="text-xs text-gray-400 mt-1 font-bold" >IDR {price}</Text>
                </View>
                <View>
                    <Image source={{ uri: imgUrl }} className="w-20 h-20 rounded-md" />
                </View>
            </View>
            
        </TouchableOpacity>

        {
            isPressed && (
                <View className="flex-row space-x-2 items-center mt-2 p-2">
                    <TouchableOpacity onPress={removeItemFromBasket} disabled={!items.length} ><AntDesign name="minuscircle" size={20} color={ items.length > 0 ? uColors.primary : "gray"} /></TouchableOpacity>
                    <Text className="text-md" >{items.length}</Text>
                    <TouchableOpacity onPress={addItemToBasket} ><AntDesign name="pluscircle" size={20} color={uColors.primary} /></TouchableOpacity>
                </View>
            )
        }

    </>
  )
}