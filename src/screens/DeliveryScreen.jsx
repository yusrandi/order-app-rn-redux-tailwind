import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { selectRestaurant } from '../redux/slices/restaurantSlice';
import { AntDesign } from '@expo/vector-icons';
import * as Progress from 'react-native-progress';
import MapView, { Marker } from 'react-native-maps';



export default function DeliveryScreen() {

    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);

    console.log(restaurant.title);

  return (
    <View className="bg-[#00CCBB] flex-1" >
        <SafeAreaView className="z-50">
            <View className="flex-row justify-between items-center p-5">
                <TouchableOpacity onPress={() => navigation.navigate('home')}>
                    <AntDesign name="close" size={30} color="white" />
                </TouchableOpacity>
                <Text className="text-white font-light text-lg" >Other Help</Text>
            </View>

            <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
               <View className="flex-row justify-between">
                    <View>
                        <Text className="text-md text-gray-400">Estimated Arrival</Text>
                        <Text className="text-3xl font-bold">45-55 Minutes</Text>
                    </View>
                    <Image source={{ uri: 'https://links.papareact.com/fls' }} className="w-20 h-20" />
               </View>

                <Progress.Bar size={30} indeterminate={true} color="#00CCBB"/>
                <Text className="mt-3 text-gray-500 text-xs" >your order at {restaurant.title} is being prepared</Text>


            </View>

        </SafeAreaView>


        <MapView 
            initialRegion={{ 
                latitude: "-5.075750",
                longitude: "119.526074",
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            }}

            mapType="mutedStandard"
            className="flex-1 -mt-10 z-0"
        
             >
             

            <Marker 
            
                coordinate={{ 
                    latitude: -5.075750,
                    longitude: 119.526074
                 }}
                 title={restaurant.title}
                 description={restaurant.short_description}
                 identifier="origin"
                 pinColor='#00CCBB'
            />

        </MapView>

        <SafeAreaView className="flex-row bg-white items-center space-x-5 h-28">
            <Image source={{ uri: 'https://links.papareact.com/wru' }} className="w-7 h-7 rounded-full bg-gray-300 p-4 ml-5" />
        
            <View className="flex-1">
                 <Text className="text-lg">Userundie</Text>
                 <Text className="text-gray-400">Your Rider</Text>
            </View>
            <TouchableOpacity>
                <Text className="text-[#00CCBB] text-lg mr-5 font-bold">Call</Text>
            </TouchableOpacity>

        </SafeAreaView>

    </View>
  )
}