import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';

export default function PreparingOrderScreen() {
    const navigation = useNavigation();
    useEffect(()=> {
        setTimeout(() => {
            navigation.navigate('delivery');
        }, 4000);
    }, [])
  return (
    <SafeAreaView className="bg-[#00CCBB] flex-1 justify-center items-center">
      <Animatable.Image source={require('../../assets/deliveroodribbbble.gif')} className="h-96 w-96" iterationCount={1} ></Animatable.Image>
      <Animatable.Text animation="slideInUp" iterationCount={1} className="text-lg my-10 text-white font-bold text-center">Waiting for reestaurant accept your order</Animatable.Text>
      {/* <Progress.Circle size={60} indeterminate={true} color="white"/> */}
      <Progress.Bar size={30} indeterminate={true} color="white" />

    </SafeAreaView>
  )
}