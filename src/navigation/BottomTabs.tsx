import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/Home/HomeScreen'
import SearchScreen from '../screens/search/SearchScreen'
import LikedScreen from '../screens/liked/LikedScreen'
import ProfileScreen from '../screens/profile/ProfileScreen'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Tabs=createBottomTabNavigator()
const BottomTabs = () => {
  return (
    <Tabs.Navigator  screenOptions={{ headerShown: false }}>
        <Tabs.Screen name='Home' component={HomeScreen} options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            )
        }}/>
        <Tabs.Screen name='Search' component={SearchScreen} options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="search" color={color} size={size} />
            )
        }}/>
        <Tabs.Screen name='Liked' component={LikedScreen} options={{
            tabBarLabel: 'Liked',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="heart-circle-outline" color={color} size={size} />
            )
        }}/>
        <Tabs.Screen name='Profile' component={ProfileScreen} options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-circle-sharp" color={color} size={size} />
            )
        }}/>
    </Tabs.Navigator>
  )
}

export default BottomTabs

const styles = StyleSheet.create({})