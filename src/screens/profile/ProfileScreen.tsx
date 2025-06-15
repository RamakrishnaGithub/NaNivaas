import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import AppHeader from '../../components/AppHeader';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {moderateScale, scale} from 'react-native-size-matters';
import { colors } from '../../constants/colors';

const ProfileScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop:
          Platform.OS === 'android'
            ? StatusBar.currentHeight ?? 0
            : StatusBar.currentHeight ?? 0,
      }}>
      <AppHeader />
      <View style={{}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: scale(20),
          }}>
          <Text style={{fontSize: moderateScale(16),fontFamily:"Poppins-Regular"}}>Logout</Text>
          <Ionicons name="chevron-forward" size={20} />
          
        </View>
        <View
            style={{
              height: 1,
              backgroundColor: colors.border,
              marginHorizontal: 10,
            }}
          />
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
