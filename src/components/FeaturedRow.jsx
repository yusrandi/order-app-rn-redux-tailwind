import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { uColors } from '../constant/Colors';
import RestaurantCard from './RestaurantCard';
import { FeaturesApi } from '../api/FeaturesApi';

export default function FeaturedRow({id, title, description, featuredCategory, items}) {

   
  return (
    <View className="">
        <View className="flex-row items-center justify-between px-4 mt-4">
            <Text className="font-bold text-lg" >{title}</Text>
            <AntDesign name="arrowright" size={24} color={uColors.primary} />
        </View>
            <Text className="text-xs text-gray-400 px-4" >{description}</Text>

        <ScrollView contentContainerStyle={{ paddingHorizontal:15, paddingTop:10 }} horizontal showsHorizontalScrollIndicator={false}>
            {
                items.map((feature) => 
                    <RestaurantCard key={feature.id} id={feature.id} imgUrl={feature.imgUrl} title={feature.title} rating={feature.rating} genre={feature.genre} address={feature.address} short_description={feature.short_description} dishes={feature.dishes} long={feature.long} lat={feature.lat}/>
                )
            }
            {/* <RestaurantCard id={1} imgUrl="https://links.papareact.com/gn7" title="Yo Sushi!" rating={4.5} genre="Japanese" address="Bps Sudiang st" short_description="This is a test short description" dishes={[]} long={20} lat={0}/>
            <RestaurantCard id={1} imgUrl="https://links.papareact.com/gn7" title="Yo Sushi!" rating={4.5} genre="Japanese" address="Bps Sudiang st" short_description="This is a test short description" dishes={[]} long={20} lat={0}/>
            <RestaurantCard id={1} imgUrl="https://links.papareact.com/gn7" title="Yo Sushi!" rating={4.5} genre="Japanese" address="Bps Sudiang st" short_description="This is a test short description" dishes={[]} long={20} lat={0}/>
            <RestaurantCard id={1} imgUrl="https://links.papareact.com/gn7" title="Yo Sushi!" rating={4.5} genre="Japanese" address="Bps Sudiang st" short_description="This is a test short description" dishes={[]} long={20} lat={0}/>
            <RestaurantCard id={1} imgUrl="https://links.papareact.com/gn7" title="Yo Sushi!" rating={4.5} genre="Japanese" address="Bps Sudiang st" short_description="This is a test short description" dishes={[]} long={20} lat={0}/> */}
        </ScrollView>
    </View>
  )
}