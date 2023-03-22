import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import HomeScreen from './src/screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RestaurantScreen from './src/screens/RestaurantScreen';
import { Provider } from 'react-redux'
import { store } from './src/redux/store';
import BasketScreen from './src/screens/BasketScreen';
import PreparingOrderScreen from './src/screens/PreparingOrderScreen';
import DeliveryScreen from './src/screens/DeliveryScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    
     <NavigationContainer>
      <Provider store={store}>
        <TailwindProvider>
          <Stack.Navigator initialRouteName={'home'}>
            <Stack.Screen name="home" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="restaurant" component={RestaurantScreen} options={{ headerShown: false }} />
            <Stack.Screen name="basket" component={BasketScreen} options={{ headerShown: false, presentation:"modal" }} />
            <Stack.Screen name="preparing" component={PreparingOrderScreen} options={{ headerShown: false, presentation: 'fullScreenModal' }} />
            <Stack.Screen name="delivery" component={DeliveryScreen} options={{ headerShown: false, presentation: 'fullScreenModal' }} />
          </Stack.Navigator>
        </TailwindProvider>
      </Provider>
     </NavigationContainer>
    
  );
}

