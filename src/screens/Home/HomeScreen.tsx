import {Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppHeader from '../../components/AppHeader';
import HomeCard from '../../components/HomeCard';
import FeaturedCities from '../../components/FeaturedCities';
import HowItWorks from '../../components/HowItWorks';
import { verticalScale } from 'react-native-size-matters';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{marginTop: Platform.OS === 'android' ? StatusBar.currentHeight ?? 0 : StatusBar.currentHeight ?? 0}}>
      <AppHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginBottom:verticalScale(50)}}>
          <HomeCard />
          <FeaturedCities />
          <HowItWorks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
