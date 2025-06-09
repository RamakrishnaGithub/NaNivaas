import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../screens/Auth/LoginScreen'
import BottomTabs from './BottomTabs'



const Stack=createNativeStackNavigator()
const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="BottomTabs" screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Login' component={LoginScreen}/>
        <Stack.Screen name='BottomTabs' component={BottomTabs}/>
    </Stack.Navigator>
  )
}

export default MainStack

const styles = StyleSheet.create({})