import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import LandingScreen from '../Screens/LandingScreen'
import SubscriptionScreen from '../Screens/SubscriptionScreen'
import Footer from '../Components/Footer'


const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
        
          name="Home" 
          component={LandingScreen }
          options={{ 
            headerShown: false, 
          }}
        />
        <Stack.Screen 
          name="Subscription" 
          component={SubscriptionScreen}
          options={{ 
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name="Footer" 
          component={Footer}
          options={{ 
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigation