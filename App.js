import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './Src/Screens/Splash';
import Login from './Src/Screens/Login';
import Signup from './Src/Screens/Signup';
import Home from './Src/Screens/Home';
import ProductDetails from './Src/Screens/ProductDetails';
import CartScreen from './Src/Screens/CartScreen';
import { Provider } from 'react-redux';
import { Store } from './Redux/Store';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
    <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  </NavigationContainer>
    </Provider>
    
  )
}

export default App